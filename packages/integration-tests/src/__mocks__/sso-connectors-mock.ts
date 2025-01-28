import { type JsonObject } from '@logto/schemas';

import { logtoUrl } from '#src/constants.js';

export const logtoIssuer = `${logtoUrl}/oidc`;

export const metadataXml = `<?xml version="1.0" encoding="utf-8"?><EntityDescriptor ID="_1b6871e0-2628-4596-bfc8-ef6c169d1d7f" entityID="https://sts.windows.net/ac016212-4f8d-46c6-892c-57c90a255a02/" xmlns="urn:oasis:names:tc:SAML:2.0:metadata"><Signature xmlns="http://www.w3.org/2000/09/xmldsig#"><SignedInfo><CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" /><SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256" /><Reference URI="#_1b6871e0-2628-4596-bfc8-ef6c169d1d7f"><Transforms><Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature" /><Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" /></Transforms><DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" /><DigestValue>k0omv1kPQA+EPB8Q4VQ0JhEsnsAUuQIGcmHIINO0HEQ=</DigestValue></Reference></SignedInfo><SignatureValue>MDx2LNmZV1mrc8fCH43Gmz403A3ix8m5ahcj2wQJub2pvS4JZ8F4J2ZBQS5x3W+H+oxjbpeXBExjmNRFQgI2Y1wWuNZcGlv5v0Rzv1s4Nmc72w24k11GtHq+cU1YgSt23z112UWDsq/WPvPjRd1oXGLM/S56nfyaeR1ig1WoqVEs+T+8MEAbCEpidL9CK5oEmF4IqAy1VouRfHEwWF/BGXsdaDxad5cgLnvmPSdVojQYRQCQasy0o/JIeXQzsSLm4V9+U3InR4GqvuJDpdnJJ/tC7flYSqWaDcYmhV0UkkS7KUkf7C0CS08Mz8Jx6ukLpJ3BfSaqGCtxmmu1IJdg8g==</SignatureValue><KeyInfo><X509Data><X509Certificate>MIIC8DCCAdigAwIBAgIQcu5YCNUIL6JNotFNdirF2DANBgkqhkiG9w0BAQsFADA0MTIwMAYDVQQDEylNaWNyb3NvZnQgQXp1cmUgRmVkZXJhdGVkIFNTTyBDZXJ0aWZpY2F0ZTAeFw0yMzEwMjUwODAyMDNaFw0yNjEwMjUwODAyMDNaMDQxMjAwBgNVBAMTKU1pY3Jvc29mdCBBenVyZSBGZWRlcmF0ZWQgU1NPIENlcnRpZmljYXRlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2EC5TZmW2ePPI0Od2Z3qFykouY/R8SBVJDD9xUcAIocMSqMLsxqd9ydkjaNC+QLbBUnpCvUd7+7ZyVcABbr5ixIMU+yxKIoZQdchECyasrR4HHXHXMeijQ8ziyF3Ys1yRB+iVQd2wZI+26pXlq9/bmT/keqMqdbAFD78QAYVF0LniL+sQav9Y0tsgrqXaE0GzqpTUsUfEcc1kynIQQG4ltFAkMTqaDhgw44S1GErjYC91dPEZMj4Ywwf1FIfnNJaRZoG77F3SlWUg345z/kAHBzNKjFMq3deobCHDZCZBJ6a+ABzgqdunUo4xBFG/YHNjjGkZEImALwp+P45mF5OLQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQAK7s967KnFm0d7R1HpTHhr6D+L/X2Ejmgawo2HlkFLsHXPgGkeogrXl0Fw6NImJ+Zo/ChE2Vb8ZeYoEz5mdAYc0hK4k4UWJkv3yZ0GPKOzEcIWZ8Q8WAKqqWnzaO8NmZKpdc/sk8PluKH/BJ7IjEHZUgzhmuRGuJGJhVn2EPLXFIxBubyRlyMhBEZvX4syeeiCwGzvZY9CoTUPqftlrvc1xs78GFN+8cT2+B0vjcbifMkZ1Hq0iPQLN/LotM1qGbSVu/OFhuA+8mnp3Acw3XNZPOy9dZdNiVBF8ZoUz0rAC64dKYROPEDJhBTF30UzDcq6lfLA9KAgzEzupAxB8D4N</X509Certificate></X509Data></KeyInfo></Signature><RoleDescriptor xsi:type="fed:SecurityTokenServiceType" protocolSupportEnumeration="http://docs.oasis-open.org/wsfed/federation/200706" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:fed="http://docs.oasis-open.org/wsfed/federation/200706"><KeyDescriptor use="signing"><KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#"><X509Data><X509Certificate>MIIC8DCCAdigAwIBAgIQcu5YCNUIL6JNotFNdirF2DANBgkqhkiG9w0BAQsFADA0MTIwMAYDVQQDEylNaWNyb3NvZnQgQXp1cmUgRmVkZXJhdGVkIFNTTyBDZXJ0aWZpY2F0ZTAeFw0yMzEwMjUwODAyMDNaFw0yNjEwMjUwODAyMDNaMDQxMjAwBgNVBAMTKU1pY3Jvc29mdCBBenVyZSBGZWRlcmF0ZWQgU1NPIENlcnRpZmljYXRlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2EC5TZmW2ePPI0Od2Z3qFykouY/R8SBVJDD9xUcAIocMSqMLsxqd9ydkjaNC+QLbBUnpCvUd7+7ZyVcABbr5ixIMU+yxKIoZQdchECyasrR4HHXHXMeijQ8ziyF3Ys1yRB+iVQd2wZI+26pXlq9/bmT/keqMqdbAFD78QAYVF0LniL+sQav9Y0tsgrqXaE0GzqpTUsUfEcc1kynIQQG4ltFAkMTqaDhgw44S1GErjYC91dPEZMj4Ywwf1FIfnNJaRZoG77F3SlWUg345z/kAHBzNKjFMq3deobCHDZCZBJ6a+ABzgqdunUo4xBFG/YHNjjGkZEImALwp+P45mF5OLQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQAK7s967KnFm0d7R1HpTHhr6D+L/X2Ejmgawo2HlkFLsHXPgGkeogrXl0Fw6NImJ+Zo/ChE2Vb8ZeYoEz5mdAYc0hK4k4UWJkv3yZ0GPKOzEcIWZ8Q8WAKqqWnzaO8NmZKpdc/sk8PluKH/BJ7IjEHZUgzhmuRGuJGJhVn2EPLXFIxBubyRlyMhBEZvX4syeeiCwGzvZY9CoTUPqftlrvc1xs78GFN+8cT2+B0vjcbifMkZ1Hq0iPQLN/LotM1qGbSVu/OFhuA+8mnp3Acw3XNZPOy9dZdNiVBF8ZoUz0rAC64dKYROPEDJhBTF30UzDcq6lfLA9KAgzEzupAxB8D4N</X509Certificate></X509Data></KeyInfo></KeyDescriptor><fed:ClaimTypesOffered><auth:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>Name</auth:DisplayName><auth:Description>The mutable display name of the user.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>Subject</auth:DisplayName><auth:Description>An immutable, globally unique, non-reusable identifier of the user that is unique to the application for which a token is issued.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>Given Name</auth:DisplayName><auth:Description>First name of the user.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>Surname</auth:DisplayName><auth:Description>Last name of the user.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/identity/claims/displayname" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>Display Name</auth:DisplayName><auth:Description>Display name of the user.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/identity/claims/nickname" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>Nick Name</auth:DisplayName><auth:Description>Nick name of the user.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/ws/2008/06/identity/claims/authenticationinstant" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>Authentication Instant</auth:DisplayName><auth:Description>The time (UTC) when the user is authenticated to Windows Azure Active Directory.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/ws/2008/06/identity/claims/authenticationmethod" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>Authentication Method</auth:DisplayName><auth:Description>The method that Windows Azure Active Directory uses to authenticate users.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/identity/claims/objectidentifier" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>ObjectIdentifier</auth:DisplayName><auth:Description>Primary identifier for the user in the directory. Immutable, globally unique, non-reusable.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/identity/claims/tenantid" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>TenantId</auth:DisplayName><auth:Description>Identifier for the user's tenant.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/identity/claims/identityprovider" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>IdentityProvider</auth:DisplayName><auth:Description>Identity provider for the user.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>Email</auth:DisplayName><auth:Description>Email address of the user.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/ws/2008/06/identity/claims/groups" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>Groups</auth:DisplayName><auth:Description>Groups of the user.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/identity/claims/accesstoken" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>External Access Token</auth:DisplayName><auth:Description>Access token issued by external identity provider.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/ws/2008/06/identity/claims/expiration" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>External Access Token Expiration</auth:DisplayName><auth:Description>UTC expiration time of access token issued by external identity provider.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/identity/claims/openid2_id" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>External OpenID 2.0 Identifier</auth:DisplayName><auth:Description>OpenID 2.0 identifier issued by external identity provider.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/claims/groups.link" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>GroupsOverageClaim</auth:DisplayName><auth:Description>Issued when number of user's group claims exceeds return limit.</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/ws/2008/06/identity/claims/role" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>Role Claim</auth:DisplayName><auth:Description>Roles that the user or Service Principal is attached to</auth:Description></auth:ClaimType><auth:ClaimType Uri="http://schemas.microsoft.com/ws/2008/06/identity/claims/wids" xmlns:auth="http://docs.oasis-open.org/wsfed/authorization/200706"><auth:DisplayName>RoleTemplate Id Claim</auth:DisplayName><auth:Description>Role template id of the Built-in Directory Roles that the user is a member of</auth:Description></auth:ClaimType></fed:ClaimTypesOffered><fed:SecurityTokenServiceEndpoint><wsa:EndpointReference xmlns:wsa="http://www.w3.org/2005/08/addressing"><wsa:Address>https://login.microsoftonline.com/ac016212-4f8d-46c6-892c-57c90a255a02/wsfed</wsa:Address></wsa:EndpointReference></fed:SecurityTokenServiceEndpoint><fed:PassiveRequestorEndpoint><wsa:EndpointReference xmlns:wsa="http://www.w3.org/2005/08/addressing"><wsa:Address>https://login.microsoftonline.com/ac016212-4f8d-46c6-892c-57c90a255a02/wsfed</wsa:Address></wsa:EndpointReference></fed:PassiveRequestorEndpoint></RoleDescriptor><RoleDescriptor xsi:type="fed:ApplicationServiceType" protocolSupportEnumeration="http://docs.oasis-open.org/wsfed/federation/200706" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:fed="http://docs.oasis-open.org/wsfed/federation/200706"><KeyDescriptor use="signing"><KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#"><X509Data><X509Certificate>MIIC8DCCAdigAwIBAgIQcu5YCNUIL6JNotFNdirF2DANBgkqhkiG9w0BAQsFADA0MTIwMAYDVQQDEylNaWNyb3NvZnQgQXp1cmUgRmVkZXJhdGVkIFNTTyBDZXJ0aWZpY2F0ZTAeFw0yMzEwMjUwODAyMDNaFw0yNjEwMjUwODAyMDNaMDQxMjAwBgNVBAMTKU1pY3Jvc29mdCBBenVyZSBGZWRlcmF0ZWQgU1NPIENlcnRpZmljYXRlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2EC5TZmW2ePPI0Od2Z3qFykouY/R8SBVJDD9xUcAIocMSqMLsxqd9ydkjaNC+QLbBUnpCvUd7+7ZyVcABbr5ixIMU+yxKIoZQdchECyasrR4HHXHXMeijQ8ziyF3Ys1yRB+iVQd2wZI+26pXlq9/bmT/keqMqdbAFD78QAYVF0LniL+sQav9Y0tsgrqXaE0GzqpTUsUfEcc1kynIQQG4ltFAkMTqaDhgw44S1GErjYC91dPEZMj4Ywwf1FIfnNJaRZoG77F3SlWUg345z/kAHBzNKjFMq3deobCHDZCZBJ6a+ABzgqdunUo4xBFG/YHNjjGkZEImALwp+P45mF5OLQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQAK7s967KnFm0d7R1HpTHhr6D+L/X2Ejmgawo2HlkFLsHXPgGkeogrXl0Fw6NImJ+Zo/ChE2Vb8ZeYoEz5mdAYc0hK4k4UWJkv3yZ0GPKOzEcIWZ8Q8WAKqqWnzaO8NmZKpdc/sk8PluKH/BJ7IjEHZUgzhmuRGuJGJhVn2EPLXFIxBubyRlyMhBEZvX4syeeiCwGzvZY9CoTUPqftlrvc1xs78GFN+8cT2+B0vjcbifMkZ1Hq0iPQLN/LotM1qGbSVu/OFhuA+8mnp3Acw3XNZPOy9dZdNiVBF8ZoUz0rAC64dKYROPEDJhBTF30UzDcq6lfLA9KAgzEzupAxB8D4N</X509Certificate></X509Data></KeyInfo></KeyDescriptor><fed:TargetScopes><wsa:EndpointReference xmlns:wsa="http://www.w3.org/2005/08/addressing"><wsa:Address>https://sts.windows.net/ac016212-4f8d-46c6-892c-57c90a255a02/</wsa:Address></wsa:EndpointReference></fed:TargetScopes><fed:ApplicationServiceEndpoint><wsa:EndpointReference xmlns:wsa="http://www.w3.org/2005/08/addressing"><wsa:Address>https://login.microsoftonline.com/ac016212-4f8d-46c6-892c-57c90a255a02/wsfed</wsa:Address></wsa:EndpointReference></fed:ApplicationServiceEndpoint><fed:PassiveRequestorEndpoint><wsa:EndpointReference xmlns:wsa="http://www.w3.org/2005/08/addressing"><wsa:Address>https://login.microsoftonline.com/ac016212-4f8d-46c6-892c-57c90a255a02/wsfed</wsa:Address></wsa:EndpointReference></fed:PassiveRequestorEndpoint></RoleDescriptor><IDPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"><KeyDescriptor use="signing"><KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#"><X509Data><X509Certificate>MIIC8DCCAdigAwIBAgIQcu5YCNUIL6JNotFNdirF2DANBgkqhkiG9w0BAQsFADA0MTIwMAYDVQQDEylNaWNyb3NvZnQgQXp1cmUgRmVkZXJhdGVkIFNTTyBDZXJ0aWZpY2F0ZTAeFw0yMzEwMjUwODAyMDNaFw0yNjEwMjUwODAyMDNaMDQxMjAwBgNVBAMTKU1pY3Jvc29mdCBBenVyZSBGZWRlcmF0ZWQgU1NPIENlcnRpZmljYXRlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2EC5TZmW2ePPI0Od2Z3qFykouY/R8SBVJDD9xUcAIocMSqMLsxqd9ydkjaNC+QLbBUnpCvUd7+7ZyVcABbr5ixIMU+yxKIoZQdchECyasrR4HHXHXMeijQ8ziyF3Ys1yRB+iVQd2wZI+26pXlq9/bmT/keqMqdbAFD78QAYVF0LniL+sQav9Y0tsgrqXaE0GzqpTUsUfEcc1kynIQQG4ltFAkMTqaDhgw44S1GErjYC91dPEZMj4Ywwf1FIfnNJaRZoG77F3SlWUg345z/kAHBzNKjFMq3deobCHDZCZBJ6a+ABzgqdunUo4xBFG/YHNjjGkZEImALwp+P45mF5OLQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQAK7s967KnFm0d7R1HpTHhr6D+L/X2Ejmgawo2HlkFLsHXPgGkeogrXl0Fw6NImJ+Zo/ChE2Vb8ZeYoEz5mdAYc0hK4k4UWJkv3yZ0GPKOzEcIWZ8Q8WAKqqWnzaO8NmZKpdc/sk8PluKH/BJ7IjEHZUgzhmuRGuJGJhVn2EPLXFIxBubyRlyMhBEZvX4syeeiCwGzvZY9CoTUPqftlrvc1xs78GFN+8cT2+B0vjcbifMkZ1Hq0iPQLN/LotM1qGbSVu/OFhuA+8mnp3Acw3XNZPOy9dZdNiVBF8ZoUz0rAC64dKYROPEDJhBTF30UzDcq6lfLA9KAgzEzupAxB8D4N</X509Certificate></X509Data></KeyInfo></KeyDescriptor><SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://login.microsoftonline.com/ac016212-4f8d-46c6-892c-57c90a255a02/saml2" /><SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://login.microsoftonline.com/ac016212-4f8d-46c6-892c-57c90a255a02/saml2" /><SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://login.microsoftonline.com/ac016212-4f8d-46c6-892c-57c90a255a02/saml2" /></IDPSSODescriptor></EntityDescriptor>`;

export const samlAssertion = `
<samlp:Response xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol" xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion" ID="_8e8dc5f69a98cc4c1ff3427e5ce34606fd672f91e6" Version="2.0" IssueInstant="2014-07-17T01:01:48Z" Destination="http://sp.example.com/demo1/index.php?acs" InResponseTo="ONELOGIN_4fee3b046395c4e751011e97f8900b5273d56685">
  <saml:Issuer>http://idp.example.com/metadata.php</saml:Issuer>
  <samlp:Status>
    <samlp:StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success"/>
  </samlp:Status>
  <saml:Assertion xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xs="http://www.w3.org/2001/XMLSchema" ID="pfx114d3ac4-3189-e63a-9fff-5b5ec60f8427" Version="2.0" IssueInstant="2014-07-17T01:01:48Z">
    <saml:Issuer>http://idp.example.com/metadata.php</saml:Issuer><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
  <ds:SignedInfo><ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
    <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
  <ds:Reference URI="#pfx114d3ac4-3189-e63a-9fff-5b5ec60f8427"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/><ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>Nm1AlMpkTW9qo9jKUtSJBZZgQvU=</ds:DigestValue></ds:Reference></ds:SignedInfo><ds:SignatureValue>DuSetp1ypZgPF2/+DJxeBSqtQiz669Fw0GcrqVjuXvSSgP997MLyXj3yZ6Szrc60WC5iCORn827rxQS4uxKtYdm6KunCv1GxckaIk49yo2uOblaXuAM69I2EffLL3vFLyyGv8zTFnTjNXU0M334pkN6DEj7LIdVA2Jdj/L/8ohU=</ds:SignatureValue>
<ds:KeyInfo><ds:X509Data><ds:X509Certificate>MIICajCCAdOgAwIBAgIBADANBgkqhkiG9w0BAQ0FADBSMQswCQYDVQQGEwJ1czETMBEGA1UECAwKQ2FsaWZvcm5pYTEVMBMGA1UECgwMT25lbG9naW4gSW5jMRcwFQYDVQQDDA5zcC5leGFtcGxlLmNvbTAeFw0xNDA3MTcxNDEyNTZaFw0xNTA3MTcxNDEyNTZaMFIxCzAJBgNVBAYTAnVzMRMwEQYDVQQIDApDYWxpZm9ybmlhMRUwEwYDVQQKDAxPbmVsb2dpbiBJbmMxFzAVBgNVBAMMDnNwLmV4YW1wbGUuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDZx+ON4IUoIWxgukTb1tOiX3bMYzYQiwWPUNMp+Fq82xoNogso2bykZG0yiJm5o8zv/sd6pGouayMgkx/2FSOdc36T0jGbCHuRSbtia0PEzNIRtmViMrt3AeoWBidRXmZsxCNLwgIV6dn2WpuE5Az0bHgpZnQxTKFek0BMKU/d8wIDAQABo1AwTjAdBgNVHQ4EFgQUGHxYqZYyX7cTxKVODVgZwSTdCnwwHwYDVR0jBBgwFoAUGHxYqZYyX7cTxKVODVgZwSTdCnwwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQ0FAAOBgQByFOl+hMFICbd3DJfnp2Rgd/dqttsZG/tyhILWvErbio/DEe98mXpowhTkC04ENprOyXi7ZbUqiicF89uAGyt1oqgTUCD1VsLahqIcmrzgumNyTwLGWo17WDAa1/usDhetWAMhgzF/Cnf5ek0nK00m0YZGyc4LzgD0CROMASTWNg==</ds:X509Certificate></ds:X509Data></ds:KeyInfo></ds:Signature>
    <saml:Subject>
      <saml:NameID SPNameQualifier="http://sp.example.com/demo1/metadata.php" Format="urn:oasis:names:tc:SAML:2.0:nameid-format:transient">_ce3d2948b4cf20146dee0a0b3dd6f69b6cf86f62d7</saml:NameID>
      <saml:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
        <saml:SubjectConfirmationData NotOnOrAfter="2024-01-18T06:21:48Z" Recipient="http://sp.example.com/demo1/index.php?acs" InResponseTo="ONELOGIN_4fee3b046395c4e751011e97f8900b5273d56685"/>
      </saml:SubjectConfirmation>
    </saml:Subject>
    <saml:Conditions NotBefore="2014-07-17T01:01:18Z" NotOnOrAfter="2024-01-18T06:21:48Z">
      <saml:AudienceRestriction>
        <saml:Audience>http://sp.example.com/demo1/metadata.php</saml:Audience>
      </saml:AudienceRestriction>
    </saml:Conditions>
    <saml:AuthnStatement AuthnInstant="2014-07-17T01:01:48Z" SessionNotOnOrAfter="2024-07-17T09:01:48Z" SessionIndex="_be9967abd904ddcae3c0eb4189adbe3f71e327cf93">
      <saml:AuthnContext>
        <saml:AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:Password</saml:AuthnContextClassRef>
      </saml:AuthnContext>
    </saml:AuthnStatement>
    <saml:AttributeStatement>
      <saml:Attribute Name="uid" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
        <saml:AttributeValue xsi:type="xs:string">test</saml:AttributeValue>
      </saml:Attribute>
      <saml:Attribute Name="mail" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
        <saml:AttributeValue xsi:type="xs:string">test@example.com</saml:AttributeValue>
      </saml:Attribute>
      <saml:Attribute Name="eduPersonAffiliation" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
        <saml:AttributeValue xsi:type="xs:string">users</saml:AttributeValue>
        <saml:AttributeValue xsi:type="xs:string">examplerole1</saml:AttributeValue>
      </saml:Attribute>
    </saml:AttributeStatement>
  </saml:Assertion>
</samlp:Response>
`;

export const providerNames = ['OIDC', 'SAML'];

export const partialConfigAndProviderNames: Array<{
  providerName: string;
  config: JsonObject;
}> = [
  {
    providerName: 'OIDC',
    config: {
      clientId: 'foo',
      clientSecret: 'foo',
      issuer: logtoIssuer,
      scope: 'openid profile email',
    },
  },
  {
    providerName: 'SAML',
    config: {
      metadata: metadataXml,
    },
  },
];

export const mockOktaSamlConnectorMetadata = `
<md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="http://www.okta.com/exkjbcsmt3qWQLZIR697">
<md:IDPSSODescriptor WantAuthnRequestsSigned="false" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
<md:KeyDescriptor use="signing">
<ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<ds:X509Data>
<ds:X509Certificate>MIIDqjCCApKgAwIBAgIGAZIxmUd7MA0GCSqGSIb3DQEBCwUAMIGVMQswCQYDVQQGEwJVUzETMBEG A1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEU MBIGA1UECwwLU1NPUHJvdmlkZXIxFjAUBgNVBAMMDXRyaWFsLTQ1NzYxMDQxHDAaBgkqhkiG9w0B CQEWDWluZm9Ab2t0YS5jb20wHhcNMjQwOTI3MDM0ODQxWhcNMzQwOTI3MDM0OTQxWjCBlTELMAkG A1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xDTAL BgNVBAoMBE9rdGExFDASBgNVBAsMC1NTT1Byb3ZpZGVyMRYwFAYDVQQDDA10cmlhbC00NTc2MTA0 MRwwGgYJKoZIhvcNAQkBFg1pbmZvQG9rdGEuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB CgKCAQEAyjmF5lvCe3CU9+YBPvoioWgcgzaTsgVYTUQRgeRNhOVaRVaKoZahMYoLiHj9Vtjj9EGk 5bY9qH3+6HPbqbvpRS00izsmMWQ+XyLgNIeAVPoxhQ9FaX3Ept+SiCnL9gPtApTI1m42+n93+x8u JNLGMGnsq/T1thw9rWW30KkY7agANglStsV3d7c1Z6bCZ+CIu495AqpmYshBgucCQ31cssNz0+vh i1i/rUNvbBlc9VQovxxKInshRSnVDZdTEKqjdHpVgIEr+TRS6+rGmpfAN2H8Ou6MX0DyXKIdS1aT B5Kdwur4Bje6fTMBBRGf3/CtqERPr0nVb0xBQv8oKoLAsQIDAQABMA0GCSqGSIb3DQEBCwUAA4IB AQCMneUgkAQBW2wQL+5zD6CI7XeChKzu0gvzBMqeH+7BhCjiiUMM0L+QS+gKYo/q9UxSmZK2qnmw rIVPW9CYJzwLLDvOU25ZcOIFGULTgnSbNIC8l9xE7UaN9uZ7ZSXDqeg/Oofg0BXy2A7zZobL/fHk HadHm+uahk8X+RxGa8I2yS/Ns32XRjlurm/wKxLdCnzzPwN4NVhzJt7VVEkjGrztMak69sZbOjH7 xQv3J3Qb27418ZgPP9sBD+r6h/d2uc/20jb+u1jNmvtmaZ97FBDTC143DzQunIrR4sMrfcwt0F8X mAhbN1/BDxPBST2NHKyMH2PE6waP3HK6FAOwMG2A</ds:X509Certificate>
</ds:X509Data>
</ds:KeyInfo>
</md:KeyDescriptor>
<md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</md:NameIDFormat>
<md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</md:NameIDFormat>
<md:SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://trial-4576104.okta.com/app/trial-4576104_logtolocalhost_1/exkjbcsmt3qWQLZIR697/sso/saml"/>
<md:SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://trial-4576104.okta.com/app/trial-4576104_logtolocalhost_1/exkjbcsmt3qWQLZIR697/sso/saml"/>
</md:IDPSSODescriptor>
</md:EntityDescriptor>
`;

export const mockOktaSamlAssertion = `<?xml version="1.0" encoding="UTF-8"?><saml2p:Response Destination="http://localhost:3001/api/authn/single-sign-on/saml/90ipi52ch151" ID="id1149608524674391958450825" IssueInstant="2024-10-10T07:47:07.202Z" Version="2.0" xmlns:saml2p="urn:oasis:names:tc:SAML:2.0:protocol" xmlns:xs="http://www.w3.org/2001/XMLSchema"><saml2:Issuer Format="urn:oasis:names:tc:SAML:2.0:nameid-format:entity" xmlns:saml2="urn:oasis:names:tc:SAML:2.0:assertion">http://www.okta.com/exkjbcsmt3qWQLZIR697</saml2:Issuer><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#"><ds:SignedInfo><ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/><ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/><ds:Reference URI="#id1149608524674391958450825"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/><ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"><ec:InclusiveNamespaces PrefixList="xs" xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"/></ds:Transform></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/><ds:DigestValue>VEVglIhA1OMUc9XH9vemBsE2keHElaL91eM9EX3d9xM=</ds:DigestValue></ds:Reference></ds:SignedInfo><ds:SignatureValue>C6XRyVYM1/eOCIv5Cg9peCTo765RXvKPzO5FlQh8/wMaweXiy8H9FioRZN3ArPSR0Kbq57EN6rs8gcpvKAbJu/IPTExueToIOlUx3BxzspjboeQTaU5t5sINvf0BxQbst2VL2hb5y76QifOhOt33VOnrXt4fVLuJXbDGquTYYP3mDx1xjMJLfaNZzuGaSJb8s8O0UQh8NwjXYdPIdNOGyzy4bEX1hifZgUcWive9X9tHPIqaTpHd6c1G/DCVHOUevkSzzY6SqKD+oeur3eu900dw7CLZBmA3FqEHHAP6C8Nda6O4g8n9KSLhMcXNMrR5kODfqWu2xRjm7ImBmOtK/A==</ds:SignatureValue><ds:KeyInfo><ds:X509Data><ds:X509Certificate>MIIDqjCCApKgAwIBAgIGAZIxmUd7MA0GCSqGSIb3DQEBCwUAMIGVMQswCQYDVQQGEwJVUzETMBEG
A1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEU
MBIGA1UECwwLU1NPUHJvdmlkZXIxFjAUBgNVBAMMDXRyaWFsLTQ1NzYxMDQxHDAaBgkqhkiG9w0B
CQEWDWluZm9Ab2t0YS5jb20wHhcNMjQwOTI3MDM0ODQxWhcNMzQwOTI3MDM0OTQxWjCBlTELMAkG
A1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xDTAL
BgNVBAoMBE9rdGExFDASBgNVBAsMC1NTT1Byb3ZpZGVyMRYwFAYDVQQDDA10cmlhbC00NTc2MTA0
MRwwGgYJKoZIhvcNAQkBFg1pbmZvQG9rdGEuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
CgKCAQEAyjmF5lvCe3CU9+YBPvoioWgcgzaTsgVYTUQRgeRNhOVaRVaKoZahMYoLiHj9Vtjj9EGk
5bY9qH3+6HPbqbvpRS00izsmMWQ+XyLgNIeAVPoxhQ9FaX3Ept+SiCnL9gPtApTI1m42+n93+x8u
JNLGMGnsq/T1thw9rWW30KkY7agANglStsV3d7c1Z6bCZ+CIu495AqpmYshBgucCQ31cssNz0+vh
i1i/rUNvbBlc9VQovxxKInshRSnVDZdTEKqjdHpVgIEr+TRS6+rGmpfAN2H8Ou6MX0DyXKIdS1aT
B5Kdwur4Bje6fTMBBRGf3/CtqERPr0nVb0xBQv8oKoLAsQIDAQABMA0GCSqGSIb3DQEBCwUAA4IB
AQCMneUgkAQBW2wQL+5zD6CI7XeChKzu0gvzBMqeH+7BhCjiiUMM0L+QS+gKYo/q9UxSmZK2qnmw
rIVPW9CYJzwLLDvOU25ZcOIFGULTgnSbNIC8l9xE7UaN9uZ7ZSXDqeg/Oofg0BXy2A7zZobL/fHk
HadHm+uahk8X+RxGa8I2yS/Ns32XRjlurm/wKxLdCnzzPwN4NVhzJt7VVEkjGrztMak69sZbOjH7
xQv3J3Qb27418ZgPP9sBD+r6h/d2uc/20jb+u1jNmvtmaZ97FBDTC143DzQunIrR4sMrfcwt0F8X
mAhbN1/BDxPBST2NHKyMH2PE6waP3HK6FAOwMG2A</ds:X509Certificate></ds:X509Data></ds:KeyInfo></ds:Signature><saml2p:Status xmlns:saml2p="urn:oasis:names:tc:SAML:2.0:protocol"><saml2p:StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success"/></saml2p:Status><saml2:Assertion ID="id1149608524840623743520189" IssueInstant="2024-10-10T07:47:07.202Z" Version="2.0" xmlns:saml2="urn:oasis:names:tc:SAML:2.0:assertion" xmlns:xs="http://www.w3.org/2001/XMLSchema"><saml2:Issuer Format="urn:oasis:names:tc:SAML:2.0:nameid-format:entity" xmlns:saml2="urn:oasis:names:tc:SAML:2.0:assertion">http://www.okta.com/exkjbcsmt3qWQLZIR697</saml2:Issuer><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#"><ds:SignedInfo><ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/><ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/><ds:Reference URI="#id1149608524840623743520189"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/><ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"><ec:InclusiveNamespaces PrefixList="xs" xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"/></ds:Transform></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/><ds:DigestValue>5xc1+qcdoEhYuTRhiGR6RDb7oIK5XfG51YsU6QEXrIk=</ds:DigestValue></ds:Reference></ds:SignedInfo><ds:SignatureValue>oDn7HoGgb50l7VXArOTEboc5Y8UX+CfXo6aAPU1e5zpLA9AFCitqPlxOq78YEecp+ur6GamP1oybTUU6z0C8eP5RopWBFBWpjeGqooftxzN2BPUYZTNA0jf3YFI4ROrtIWzrFEA4Hwq7c2Jx9o4hFXDvQLYtI51ImnolBR82XXk/PU9bspCn8i+cCWM00LJhA3V74MJ74bfvECQhuznT6I2m09SRhfIqgYTncQoO79/0IgK5tEb7lEjtR7AmssyBMJlZrBPhe3Fv9prIOzOgWTQkFPvor62fkeNBb0MEHBK2MUfpgbrZpsUlE4R7NRxEM7n3gZYFHgaoF77MFwIJhw==</ds:SignatureValue><ds:KeyInfo><ds:X509Data><ds:X509Certificate>MIIDqjCCApKgAwIBAgIGAZIxmUd7MA0GCSqGSIb3DQEBCwUAMIGVMQswCQYDVQQGEwJVUzETMBEG
A1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEU
MBIGA1UECwwLU1NPUHJvdmlkZXIxFjAUBgNVBAMMDXRyaWFsLTQ1NzYxMDQxHDAaBgkqhkiG9w0B
CQEWDWluZm9Ab2t0YS5jb20wHhcNMjQwOTI3MDM0ODQxWhcNMzQwOTI3MDM0OTQxWjCBlTELMAkG
A1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xDTAL
BgNVBAoMBE9rdGExFDASBgNVBAsMC1NTT1Byb3ZpZGVyMRYwFAYDVQQDDA10cmlhbC00NTc2MTA0
MRwwGgYJKoZIhvcNAQkBFg1pbmZvQG9rdGEuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
CgKCAQEAyjmF5lvCe3CU9+YBPvoioWgcgzaTsgVYTUQRgeRNhOVaRVaKoZahMYoLiHj9Vtjj9EGk
5bY9qH3+6HPbqbvpRS00izsmMWQ+XyLgNIeAVPoxhQ9FaX3Ept+SiCnL9gPtApTI1m42+n93+x8u
JNLGMGnsq/T1thw9rWW30KkY7agANglStsV3d7c1Z6bCZ+CIu495AqpmYshBgucCQ31cssNz0+vh
i1i/rUNvbBlc9VQovxxKInshRSnVDZdTEKqjdHpVgIEr+TRS6+rGmpfAN2H8Ou6MX0DyXKIdS1aT
B5Kdwur4Bje6fTMBBRGf3/CtqERPr0nVb0xBQv8oKoLAsQIDAQABMA0GCSqGSIb3DQEBCwUAA4IB
AQCMneUgkAQBW2wQL+5zD6CI7XeChKzu0gvzBMqeH+7BhCjiiUMM0L+QS+gKYo/q9UxSmZK2qnmw
rIVPW9CYJzwLLDvOU25ZcOIFGULTgnSbNIC8l9xE7UaN9uZ7ZSXDqeg/Oofg0BXy2A7zZobL/fHk
HadHm+uahk8X+RxGa8I2yS/Ns32XRjlurm/wKxLdCnzzPwN4NVhzJt7VVEkjGrztMak69sZbOjH7
xQv3J3Qb27418ZgPP9sBD+r6h/d2uc/20jb+u1jNmvtmaZ97FBDTC143DzQunIrR4sMrfcwt0F8X
mAhbN1/BDxPBST2NHKyMH2PE6waP3HK6FAOwMG2A</ds:X509Certificate></ds:X509Data></ds:KeyInfo></ds:Signature><saml2:Subject xmlns:saml2="urn:oasis:names:tc:SAML:2.0:assertion"><saml2:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified">mock_user_id</saml2:NameID><saml2:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer"><saml2:SubjectConfirmationData NotOnOrAfter="2024-10-10T07:52:07.202Z" Recipient="http://localhost:3001/api/authn/single-sign-on/saml/90ipi52ch151"/></saml2:SubjectConfirmation></saml2:Subject><saml2:Conditions NotBefore="2024-10-10T07:42:07.202Z" NotOnOrAfter="2024-10-10T07:52:07.202Z" xmlns:saml2="urn:oasis:names:tc:SAML:2.0:assertion"><saml2:AudienceRestriction><saml2:Audience>http://localhost:3001/enterprise-sso/90ipi52ch151</saml2:Audience></saml2:AudienceRestriction></saml2:Conditions><saml2:AuthnStatement AuthnInstant="2024-10-10T05:43:54.561Z" SessionIndex="id1728546427073.1671158468" xmlns:saml2="urn:oasis:names:tc:SAML:2.0:assertion"><saml2:AuthnContext><saml2:AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport</saml2:AuthnContextClassRef></saml2:AuthnContext></saml2:AuthnStatement><saml2:AttributeStatement xmlns:saml2="urn:oasis:names:tc:SAML:2.0:assertion"><saml2:Attribute Name="email" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified"><saml2:AttributeValue xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">mock_user_id</saml2:AttributeValue></saml2:Attribute><saml2:Attribute Name="name" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified"></saml2:Attribute></saml2:AttributeStatement></saml2:Assertion></saml2p:Response>`;
