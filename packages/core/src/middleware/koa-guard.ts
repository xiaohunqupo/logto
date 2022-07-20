import { has, Optional } from '@silverhand/essentials';
import { MiddlewareType } from 'koa';
import koaBody from 'koa-body';
import { IMiddleware, IRouterParamContext } from 'koa-router';
import { ZodType } from 'zod';

import RequestError from '@/errors/RequestError';
import ServerError from '@/errors/ServerError';
import assertThat from '@/utils/assert-that';

export type GuardConfig<QueryT, BodyT, ParametersT, ResponseT> = {
  query?: ZodType<QueryT>;
  body?: ZodType<BodyT>;
  params?: ZodType<ParametersT>;
  response?: ZodType<ResponseT>;
  status?: number | number[];
};

export type GuardedRequest<QueryT, BodyT, ParametersT> = {
  query: QueryT;
  body: BodyT;
  params: ParametersT;
};

export type WithGuardedRequestContext<
  ContextT extends IRouterParamContext,
  GuardQueryT,
  GuardBodyT,
  GuardParametersT
> = ContextT & {
  guard: GuardedRequest<GuardQueryT, GuardBodyT, GuardParametersT>;
};

export type WithGuardConfig<
  Type,
  GuardQueryT = unknown,
  GuardBodyT = unknown,
  GuardParametersT = unknown,
  GuardResponseT = unknown
> = Type & {
  config: GuardConfig<GuardQueryT, GuardBodyT, GuardParametersT, GuardResponseT>;
};

export const isGuardMiddleware = <Type extends IMiddleware>(
  function_: Type
): function_ is WithGuardConfig<Type> =>
  function_.name === 'guardMiddleware' && has(function_, 'config');

const tryParse = <Output, Definition, Input>(
  type: 'query' | 'body' | 'params',
  guard: Optional<ZodType<Output, Definition, Input>>,
  data: unknown
) => {
  try {
    return guard?.parse(data);
  } catch (error: unknown) {
    throw new RequestError({ code: 'guard.invalid_input', type }, error);
  }
};

export default function koaGuard<
  StateT,
  ContextT extends IRouterParamContext,
  GuardQueryT = undefined,
  GuardBodyT = undefined,
  GuardParametersT = undefined,
  GuardResponseT = unknown
>({
  query,
  body,
  params,
  response,
  status,
}: GuardConfig<GuardQueryT, GuardBodyT, GuardParametersT, GuardResponseT>): MiddlewareType<
  StateT,
  WithGuardedRequestContext<ContextT, GuardQueryT, GuardBodyT, GuardParametersT>,
  GuardResponseT
> {
  const guard: MiddlewareType<
    StateT,
    WithGuardedRequestContext<ContextT, GuardQueryT, GuardBodyT, GuardParametersT>,
    GuardResponseT
  > = async (ctx, next) => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, no-restricted-syntax
    ctx.guard = {
      query: tryParse('query', query, ctx.request.query),
      body: tryParse('body', body, ctx.request.body),
      params: tryParse('params', params, ctx.params),
    } as GuardedRequest<GuardQueryT, GuardBodyT, GuardParametersT>; // Have to do this since it's too complicated for TS

    return next();
  };

  const guardMiddleware: WithGuardConfig<
    MiddlewareType<
      StateT,
      WithGuardedRequestContext<ContextT, GuardQueryT, GuardBodyT, GuardParametersT>,
      GuardResponseT
    >
  > = async function (ctx, next) {
    if (body) {
      return koaBody<StateT, ContextT>()(ctx, async () => guard(ctx, next));
    }

    await guard(ctx, next);

    if (status !== undefined) {
      assertThat(
        Array.isArray(status)
          ? status.includes(ctx.response.status)
          : status === ctx.response.status,
        new ServerError()
      );
    }

    if (response !== undefined) {
      assertThat(response.safeParse(ctx.body).success, new ServerError());
    }
  };

  // Intended
  // eslint-disable-next-line @silverhand/fp/no-mutation
  guardMiddleware.config = { query, body, params };

  return guardMiddleware;
}
