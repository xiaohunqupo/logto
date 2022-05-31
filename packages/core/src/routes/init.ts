import Koa from 'koa';
import mount from 'koa-mount';
import Router from 'koa-router';
import { Provider } from 'oidc-provider';

import koaAuth from '@/middleware/koa-auth';
import koaLogSession from '@/middleware/koa-log-session';
import applicationRoutes from '@/routes/application';
import connectorRoutes from '@/routes/connector';
import dashboardRoutes from '@/routes/dashboard';
import resourceRoutes from '@/routes/resource';
import sessionRoutes from '@/routes/session';
import settingRoutes from '@/routes/setting';
import signInExperiencesRoutes from '@/routes/sign-in-experience';
import signInSettingsRoutes from '@/routes/sign-in-settings';
import statusRoutes from '@/routes/status';
import swaggerRoutes from '@/routes/swagger';

import adminUserRoutes from './admin-user';
import logRoutes from './log';
import roleRoutes from './role';
import { AnonymousRouter, AuthedRouter } from './types';

export const sessionRouter: AnonymousRouter = new Router();
export const anonymousRouter: AnonymousRouter = new Router();
export const authedRouter: AuthedRouter = new Router();
authedRouter.use(koaAuth());

export const apiRouter = new Router<any, any>();

const createRouters = (provider: Provider) => {
  sessionRouter.use(koaLogSession(provider));
  sessionRoutes(sessionRouter, provider);

  signInSettingsRoutes(anonymousRouter);
  statusRoutes(anonymousRouter);
  // SwaggerRoutes(anonymousRouter);

  applicationRoutes(authedRouter);
  settingRoutes(authedRouter);
  connectorRoutes(authedRouter);
  resourceRoutes(authedRouter);
  signInExperiencesRoutes(authedRouter);
  adminUserRoutes(authedRouter);
  logRoutes(authedRouter);
  roleRoutes(authedRouter);
  dashboardRoutes(authedRouter);

  return [sessionRouter, anonymousRouter, authedRouter];
};

export default function initRouter(app: Koa, provider: Provider) {
  const apisApp = new Koa();

  console.warn('IIIIIIII apisApp', apisApp.middleware);

  for (const router of createRouters(provider)) {
    apiRouter.use(router.routes()).use(router.allowedMethods());
  }

  swaggerRoutes(apiRouter);

  apisApp.use(apiRouter.routes()).use(apiRouter.allowedMethods());

  console.warn('IIIIIIII XXXX apisApp', apisApp.middleware);

  app.use(mount('/api', apisApp));
}
