import {AuthConfig, JwksValidationHandler} from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'http://127.0.0.1:4444/',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'xxxx-client',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC.
  // scope: 'openid profile email',
  scope: 'openid profile email',

  // For testing purpose
  requireHttps: false,
  logoutUrl: 'http://127.0.0.1:4444/logout'

}
