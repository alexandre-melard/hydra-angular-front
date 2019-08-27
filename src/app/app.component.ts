import {Component} from '@angular/core';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './shared/auth/auth.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'sso-demo';
    host = window.location.hostname;

    constructor(private oauthService: OAuthService) {
        this.configure();
        let color = 'steelblue';
        if (window.location.hostname === 'auth-front') {
            color = 'darkred';
        } else if (window.location.hostname === 'second-client') {
            color = '#775';
        }
        document.body.style.backgroundColor = color;
    }

    private configure() {
        this.oauthService.configure(authConfig);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
}
