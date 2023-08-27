import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://<your-domain>',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'please-enter-clientId',
            scope: 'openid profile email', // 'openid profile ' + your scopes
            responseType: 'code',
            silentRenew: false,
            renewTimeBeforeTokenExpiresInSeconds: 10,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
