import { conditional } from '@silverhand/essentials';
import { OpenAPIV3 } from 'openapi-types';
import {
  ZodArray,
  ZodBoolean,
  ZodNativeEnum,
  ZodNever,
  ZodNullable,
  ZodNumber,
  ZodObject,
  ZodOptional,
  ZodString,
  ZodUnion,
  ZodUnknown,
} from 'zod';

import RequestError from '@/errors/RequestError';

export const zodTypeToSwagger = (config: unknown): OpenAPIV3.SchemaObject => {
  if (Array.isArray(config)) {
    return {
      type: 'string', // FIXME
    };
  }

  if (config instanceof ZodOptional) {
    return zodTypeToSwagger(config._def.innerType);
  }

  if (config instanceof ZodNullable) {
    return zodTypeToSwagger(config._def.innerType); // TODO
  }

  if (config instanceof ZodNativeEnum) {
    console.warn('ZZZZZZ ZodNativeEnum', config);

    return {
      type: 'string',
      enum: Object.values(config.enum), // TODO
    };
  }

  if (config instanceof ZodUnion) {
    // Return zodTypeToSwagger(config._def.options); // TODO
    return {
      type: 'string', // FIXME
    };
  }

  if (config instanceof ZodNever) {
    return {
      type: 'string', // FIXME
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
    return {
      type: 'string',
    };
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

  // If (config instanceof ZodUnknown) {
  //   return {
  //     type: 'unknown', // FIXME
  //   };
  // }

  if (config instanceof ZodUnknown) {
    return {
      type: 'object', // FIXME
    };
  }

  console.error('ZZZZZZ config', config);

  throw new RequestError('swagger.invalid_zod_type', config);
};
