import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://<your-domain>',
  redirectUri: window.location.origin,
  clientId: '<your-client-id>',
  responseType: 'code',
  scope: 'openid profile email',
  // This is just for dev, make it false in production
  showDebugInformation: true,
};
