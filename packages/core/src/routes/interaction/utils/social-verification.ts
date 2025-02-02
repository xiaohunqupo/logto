import type { ConnectorSession } from '@logto/connector-kit';
import type { SocialConnectorPayload } from '@logto/schemas';
import { ConnectorType } from '@logto/schemas';
import type { Context } from 'koa';
import type { Provider } from 'oidc-provider';

import { getLogtoConnectorById } from '#src/connectors/index.js';
import type { SocialUserInfo } from '#src/connectors/types.js';
import { getUserInfoByAuthCode } from '#src/libraries/social.js';
import type { LogContext } from '#src/middleware/koa-audit-log.js';
import {
  getConnectorSessionResult,
  assignConnectorSessionResult,
} from '#src/routes/interaction/utils/interaction.js';
import assertThat from '#src/utils/assert-that.js';

import type { SocialAuthorizationUrlPayload } from '../types/index.js';

export const createSocialAuthorizationUrl = async (
  ctx: Context,
  provider: Provider,
  payload: SocialAuthorizationUrlPayload
) => {
  const { connectorId, state, redirectUri } = payload;
  assertThat(state && redirectUri, 'session.insufficient_info');

  const connector = await getLogtoConnectorById(connectorId);

  assertThat(connector.type === ConnectorType.Social, 'connector.unexpected_type');

  return connector.getAuthorizationUri(
    { state, redirectUri },
    async (connectorStorage: ConnectorSession) =>
      assignConnectorSessionResult(ctx, provider, connectorStorage)
  );
};

export const verifySocialIdentity = async (
  { connectorId, connectorData }: SocialConnectorPayload,
  ctx: Context,
  provider: Provider
): Promise<SocialUserInfo> => {
  // eslint-disable-next-line prefer-destructuring, @typescript-eslint/no-unsafe-assignment
  const createLog: LogContext['createLog'] = ctx.createLog;
  const log = createLog('Interaction.SignIn.Identifier.Social.Submit');
  log.append({ connectorId, connectorData });

  const userInfo = await getUserInfoByAuthCode(connectorId, connectorData, async () =>
    getConnectorSessionResult(ctx, provider)
  );

  log.append(userInfo);

  return userInfo;
};
