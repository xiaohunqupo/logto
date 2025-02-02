import type { LogKey } from '@logto/schemas';

type LogEventTitle = Record<string, string>;

/** @deprecated Don't use or update. */
const logEventTitleLegacy: LogEventTitle = Object.freeze({
  RegisterUsernamePassword: 'Register with username and password',
  RegisterEmailSendPasscode: 'Register with email (send passcode)',
  RegisterEmail: 'Register with email',
  RegisterSmsSendPasscode: 'Register with SMS (send passcode)',
  RegisterSms: 'Register with SMS',
  RegisterSocialBind: 'Bind social account',
  RegisterSocial: 'Register with social account',
  SignInUsernamePassword: 'Sign in with username and password',
  SignInEmailSendPasscode: 'Sign in with email (send passcode)',
  SignInEmail: 'Register with email',
  SignInSmsSendPasscode: 'Sign in with SMS (send passcode)',
  SignInSms: 'Sign in with SMS',
  SignInSocialBind: 'Sign in with social related account',
  SignInSocial: 'Sign in with social account',
  CodeExchangeToken: 'Exchange token by auth code',
  RefreshTokenExchangeToken: 'Exchange token by refresh token',
  RevokeToken: 'Revoke token',
});

export const logEventTitle: Record<string, string | undefined> & Partial<Record<LogKey, string>> =
  Object.freeze({
    ...logEventTitleLegacy,
    'ExchangeTokenBy.AuthorizationCode': 'Exchange token by auth code',
    'ExchangeTokenBy.RefreshToken': 'Exchange token by refresh token',
    'Interaction.Create': 'Interaction started',
    'Interaction.End': 'Interaction ended',
  });
