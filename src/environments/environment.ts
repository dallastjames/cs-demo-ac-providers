import { Environment } from './environment.model';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  webHost: 'http://localhost:8100/',
  appHost: 'msauth://',
  azure: {
    authConfig: 'azure',
    clientID: 'ed8cb65d-7bb2-4107-bc36-557fb680b994',
    discoveryUrl:
      'https://dtjacdemo.b2clogin.com/dtjacdemo.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_signin',
    redirectUri: '',
    scope:
      'openid offline_access email profile https://dtjacdemo.onmicrosoft.com/ed8cb65d-7bb2-4107-bc36-557fb680b994/demo.read',
    audience: '',
    logoutUrl: '',
    iosWebView: 'private',
    logLevel: 'DEBUG',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
