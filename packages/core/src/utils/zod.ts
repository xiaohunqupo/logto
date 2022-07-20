import { arbitraryObjectGuard } from '@logto/schemas';
import { conditional, ValuesOf } from '@silverhand/essentials';
import { OpenAPIV3 } from 'openapi-types';
import {
  ZodArray,
  ZodBoolean,
  ZodLiteral,
  ZodNativeEnum,
  ZodNullable,
  ZodNumber,
  ZodObject,
  ZodOptional,
  ZodString,
  ZodStringDef,
  ZodUnion,
  ZodUnknown,
} from 'zod';

import RequestError from '@/errors/RequestError';

export type ZodStringCheck = ValuesOf<ZodStringDef['checks']>;

const zodStringCheckToSwaggerFormat = (zodStringCheck: ZodStringCheck) => {
  const { kind } = zodStringCheck;

  switch (kind) {
    case 'email':
    case 'url':
    case 'uuid':
    case 'cuid':
    case 'regex':
      return kind;

    case 'min':
    case 'max':
      // Do nothing here
      return;

    default:
      throw new RequestError('swagger.invalid_zod_type', zodStringCheck);
  }
};

// https://github.com/colinhacks/zod#strings
const zodStringToSwagger = (zodString: ZodString): OpenAPIV3.SchemaObject => {
  const { checks } = zodString._def;

  const formats = checks
    .map((zodStringCheck) => zodStringCheckToSwaggerFormat(zodStringCheck))
    .filter((format) => format);
  const minLength = checks.find(
    (check): check is { kind: 'min'; value: number } => check.kind === 'min'
  )?.value;
  const maxLength = checks.find(
    (check): check is { kind: 'max'; value: number } => check.kind === 'max'
  )?.value;
  const pattern = checks
    .find((check): check is { kind: 'regex'; regex: RegExp } => check.kind === 'regex')
    ?.regex.toString();

  return {
    type: 'string',
    format: formats.length > 0 ? formats.join(' | ') : undefined,
    minLength,
    maxLength,
    pattern,
  };
};

// https://github.com/colinhacks/zod#literals
const zodLiteralToSwagger = (zodLiteral: ZodLiteral<unknown>): OpenAPIV3.SchemaObject => {
  const { value } = zodLiteral;

  switch (typeof value) {
    case 'boolean':
      return {
        type: 'boolean',
        format: String(value),
      };
    case 'number':
      return {
        type: 'number',
        format: String(value),
      };
    case 'string':
      return {
        type: 'string',
        format: value === '' ? 'empty' : `"${value}"`,
      };
    default:
      throw new RequestError('swagger.invalid_zod_type', zodLiteral);
  }
};

export const zodTypeToSwagger = (config: unknown): OpenAPIV3.SchemaObject => {
  if (config === arbitraryObjectGuard) {
    return {
      type: 'object',
      description: 'arbitrary',
    };
  }

  if (config instanceof ZodOptional) {
    return zodTypeToSwagger(config._def.innerType);
  }

  if (config instanceof ZodNullable) {
    return {
      nullable: true,
      ...zodTypeToSwagger(config._def.innerType),
    };
  }

  if (config instanceof ZodNativeEnum) {
    return {
      type: 'string',
      enum: Object.values(config.enum),
    };
  }

  if (config instanceof ZodLiteral) {
    return zodLiteralToSwagger(config);
  }

  if (config instanceof ZodUnknown) {
    return { example: {} }; // Any data type
  }

  if (config instanceof ZodUnion) {
    return {
      // ZodUnion.options type is any
      // eslint-disable-next-line no-restricted-syntax
      oneOf: (config.options as unknown[]).map((option) => zodTypeToSwagger(option)),
    };
  }

  if (config instanceof ZodObject) {
    const entries = Object.entries(config.shape);
    const required = entries
      .filter(([, value]) => !(value instanceof ZodOptional))
      .map(([key]) => key);

    return {
      type: 'object',
      required: conditional(required.length > 0 && required),
      properties: Object.fromEntries(entries.map(([key, value]) => [key, zodTypeToSwagger(value)])),
    };
  }

  if (config instanceof ZodArray) {
    return {
      type: 'array',
      items: zodTypeToSwagger(config._def.type),
    };
  }

  if (config instanceof ZodString) {
    return zodStringToSwagger(config);
  }

  if (config instanceof ZodNumber) {
    return {
      type: 'number',
    };
  }

  if (config instanceof ZodBoolean) {
    return {
      type: 'boolean',
    };
  }

  throw new RequestError('swagger.invalid_zod_type', config);
};
