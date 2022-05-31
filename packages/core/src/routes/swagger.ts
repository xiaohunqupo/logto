import { toTitle } from '@silverhand/essentials';
import { IMiddleware } from 'koa-router';
import { OpenAPIV3 } from 'openapi-types';

import { isGuardMiddleware, WithGuardConfig } from '@/middleware/koa-guard';
import { zodTypeToSwagger } from '@/utils/zod';

import { AnonymousRouter } from './types';

export default function swaggerRoutes<T extends AnonymousRouter>(router: T) {
  router.get('/swagger.json', async (ctx, next) => {
    // Console.warn('RRRRRRRRRR ctx.router', ctx.router);
    // console.warn('RRRRRRRRRR ctx', ctx);

    // console.warn('ctx.router.stack', ctx.router.stack);
    // console.warn('sessionRouter.routes()', sessionRouter.routes());

    const routes = ctx.router.stack.map(({ path, stack, methods }) => {
      const guard = stack.find((function_): function_ is WithGuardConfig<IMiddleware> =>
        isGuardMiddleware(function_)
      );

      return { path, methods, guard };
    });

    const paths = Object.fromEntries(
      routes.map<[string, OpenAPIV3.PathItemObject]>(({ path, methods, guard }) => {
        const body = guard?.config.body;
        console.warn('PPPPPPP path', path, methods);
        // Console.warn('BBBBBBB body', body);

        // TODO: /oidc/* 不用展示? 应该页展示不了
        return [
          `/api${path}`,
          Object.fromEntries(
            methods.map<[string, OpenAPIV3.OperationObject]>((method) => [
              method.toLowerCase(),
              {
                tags: [toTitle(path.split('/')[1] ?? 'General')],
                requestBody: body && {
                  required: true,
                  content: {
                    'application/json': {
                      schema: zodTypeToSwagger(body),
                    },
                  },
                },
                responses: {
                  '200': {
                    description: 'OK',
                  },
                },
              },
            ])
          ),
        ];
      })
    );

    const document: OpenAPIV3.Document = {
      openapi: '3.0.1',
      info: {
        title: 'Logto Core',
        version: '0.1.0',
      },
      paths,
    };

    ctx.body = document;

    return next();
  });
}
