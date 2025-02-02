import { ConnectorType, InteractionEvent, SignInIdentifier } from '@logto/schemas';
import { assert } from '@silverhand/essentials';

import {
  sendVerificationPasscode,
  putInteraction,
  deleteUser,
  patchInteractionIdentifiers,
  putInteractionProfile,
  patchInteractionProfile,
  deleteInteractionProfile,
  putInteractionEvent,
} from '#src/api/index.js';
import { readPasscode, expectRejects } from '#src/helpers.js';

import { initClient, processSession, logoutClient } from './utils/client.js';
import { clearConnectorsByTypes, setEmailConnector, setSmsConnector } from './utils/connector.js';
import {
  enableAllPasscodeSignInMethods,
  enableAllPasswordSignInMethods,
} from './utils/sign-in-experience.js';
import { generateNewUserProfile, generateNewUser } from './utils/user.js';

describe('Register with username and password', () => {
  it('register with username and password', async () => {
    await enableAllPasswordSignInMethods({
      identifiers: [SignInIdentifier.Username],
      password: true,
      verify: false,
    });

    const { username, password } = generateNewUserProfile({ username: true, password: true });
    const client = await initClient();

    await client.send(putInteraction, {
      event: InteractionEvent.Register,
      profile: {
        username,
        password,
      },
    });

    const { redirectTo } = await client.submitInteraction();

    const id = await processSession(client, redirectTo);
    await logoutClient(client);
    await deleteUser(id);
  });
});

describe('Register with passwordless identifier', () => {
  beforeAll(async () => {
    await clearConnectorsByTypes([ConnectorType.Email, ConnectorType.Sms]);
    await setEmailConnector();
    await setSmsConnector();
  });
  afterAll(async () => {
    await clearConnectorsByTypes([ConnectorType.Email, ConnectorType.Sms]);
  });

  it('register with email', async () => {
    await enableAllPasscodeSignInMethods({
      identifiers: [SignInIdentifier.Email],
      password: false,
      verify: true,
    });

    const { primaryEmail } = generateNewUserProfile({ primaryEmail: true });
    const client = await initClient();

    await client.successSend(putInteraction, {
      event: InteractionEvent.Register,
    });

    await client.successSend(sendVerificationPasscode, {
      email: primaryEmail,
    });

    const passcodeRecord = await readPasscode();

    expect(passcodeRecord).toMatchObject({
      address: primaryEmail,
      type: InteractionEvent.Register,
    });

    const { code } = passcodeRecord;

    await client.successSend(patchInteractionIdentifiers, {
      email: primaryEmail,
      passcode: code,
    });

    await client.successSend(putInteractionProfile, {
      email: primaryEmail,
    });

    const { redirectTo } = await client.submitInteraction();

    const id = await processSession(client, redirectTo);
    await logoutClient(client);
    await deleteUser(id);
  });

  it('register with email and fulfill password', async () => {
    await enableAllPasscodeSignInMethods({
      identifiers: [SignInIdentifier.Email],
      password: true,
      verify: true,
    });

    const { primaryEmail, password } = generateNewUserProfile({
      primaryEmail: true,
      password: true,
    });
    const client = await initClient();

    await client.successSend(putInteraction, {
      event: InteractionEvent.Register,
    });

    await client.successSend(sendVerificationPasscode, {
      email: primaryEmail,
    });

    const passcodeRecord = await readPasscode();

    const { code } = passcodeRecord;

    await client.successSend(patchInteractionIdentifiers, {
      email: primaryEmail,
      passcode: code,
    });

    await client.successSend(putInteractionProfile, {
      email: primaryEmail,
    });

    await expectRejects(client.submitInteraction(), 'user.missing_profile');

    await client.successSend(patchInteractionProfile, {
      password,
    });

    const { redirectTo } = await client.submitInteraction();
    await processSession(client, redirectTo);
    await logoutClient(client);

    // SignIn with email and password
    await client.initSession();
    await client.successSend(putInteraction, {
      event: InteractionEvent.SignIn,
      identifier: {
        email: primaryEmail,
        password,
      },
    });

    const { redirectTo: redirectTo2 } = await client.submitInteraction();
    const id = await processSession(client, redirectTo2);
    await logoutClient(client);

    await deleteUser(id);
  });

  it('register with phone', async () => {
    await enableAllPasscodeSignInMethods({
      identifiers: [SignInIdentifier.Sms],
      password: false,
      verify: true,
    });

    const { primaryPhone } = generateNewUserProfile({ primaryPhone: true });
    const client = await initClient();

    await client.successSend(putInteraction, {
      event: InteractionEvent.Register,
    });

    await client.successSend(sendVerificationPasscode, {
      phone: primaryPhone,
    });

    const passcodeRecord = await readPasscode();

    expect(passcodeRecord).toMatchObject({
      phone: primaryPhone,
      type: InteractionEvent.Register,
    });

    const { code } = passcodeRecord;

    await client.successSend(patchInteractionIdentifiers, {
      phone: primaryPhone,
      passcode: code,
    });

    await client.successSend(putInteractionProfile, {
      phone: primaryPhone,
    });

    const { redirectTo } = await client.submitInteraction();

    const id = await processSession(client, redirectTo);
    await logoutClient(client);
    await deleteUser(id);
  });

  it('register with phone and fulfill password', async () => {
    await enableAllPasscodeSignInMethods({
      identifiers: [SignInIdentifier.Sms],
      password: true,
      verify: true,
    });

    const { primaryPhone, password } = generateNewUserProfile({
      primaryPhone: true,
      password: true,
    });
    const client = await initClient();

    await client.successSend(putInteraction, {
      event: InteractionEvent.Register,
    });

    await client.successSend(sendVerificationPasscode, {
      phone: primaryPhone,
    });

    const { code } = await readPasscode();

    await client.successSend(patchInteractionIdentifiers, {
      phone: primaryPhone,
      passcode: code,
    });

    await client.successSend(putInteractionProfile, {
      phone: primaryPhone,
    });

    await expectRejects(client.submitInteraction(), 'user.missing_profile');

    await client.successSend(patchInteractionProfile, {
      password,
    });

    const { redirectTo } = await client.submitInteraction();

    await processSession(client, redirectTo);
    await logoutClient(client);

    // SignIn with phone and password
    await client.initSession();
    await client.successSend(putInteraction, {
      event: InteractionEvent.SignIn,
      identifier: {
        phone: primaryPhone,
        password,
      },
    });

    const { redirectTo: redirectTo2 } = await client.submitInteraction();
    const id = await processSession(client, redirectTo2);
    await logoutClient(client);

    await deleteUser(id);
  });

  it('register with exiting email', async () => {
    const {
      user,
      userProfile: { primaryEmail },
    } = await generateNewUser({ primaryEmail: true });

    await enableAllPasscodeSignInMethods({
      identifiers: [SignInIdentifier.Email],
      password: false,
      verify: true,
    });

    const client = await initClient();

    await client.successSend(putInteraction, {
      event: InteractionEvent.Register,
    });

    await client.successSend(sendVerificationPasscode, {
      email: primaryEmail,
    });

    const passcodeRecord = await readPasscode();

    expect(passcodeRecord).toMatchObject({
      address: primaryEmail,
      type: InteractionEvent.Register,
    });

    const { code } = passcodeRecord;

    await client.successSend(patchInteractionIdentifiers, {
      email: primaryEmail,
      passcode: code,
    });

    await client.successSend(putInteractionProfile, {
      email: primaryEmail,
    });

    await expectRejects(client.submitInteraction(), 'user.email_already_in_use');

    await client.successSend(deleteInteractionProfile);
    await client.successSend(putInteractionEvent, { event: InteractionEvent.SignIn });

    const { redirectTo } = await client.submitInteraction();
    await processSession(client, redirectTo);
    await logoutClient(client);
    await deleteUser(user.id);
  });

  it('register with exiting phone', async () => {
    const {
      user,
      userProfile: { primaryPhone },
    } = await generateNewUser({ primaryPhone: true });

    await enableAllPasscodeSignInMethods({
      identifiers: [SignInIdentifier.Sms],
      password: false,
      verify: true,
    });

    const client = await initClient();
    assert(client.interactionCookie, new Error('Session not found'));

    await client.successSend(putInteraction, {
      event: InteractionEvent.Register,
    });

    await client.successSend(sendVerificationPasscode, {
      phone: primaryPhone,
    });

    const passcodeRecord = await readPasscode();

    expect(passcodeRecord).toMatchObject({
      phone: primaryPhone,
      type: InteractionEvent.Register,
    });

    const { code } = passcodeRecord;

    await client.successSend(patchInteractionIdentifiers, {
      phone: primaryPhone,
      passcode: code,
    });

    await client.successSend(putInteractionProfile, {
      phone: primaryPhone,
    });

    await expectRejects(client.submitInteraction(), 'user.phone_already_in_use');

    await client.successSend(deleteInteractionProfile);
    await client.successSend(putInteractionEvent, { event: InteractionEvent.SignIn });

    const { redirectTo } = await client.submitInteraction();
    await processSession(client, redirectTo);
    await logoutClient(client);
    await deleteUser(user.id);
  });
});
