import {Component, OnInit} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private oauthService: OAuthService) {
    }

    public get claims() {
        const claims: any = this.oauthService.getIdentityClaims();
        if (!claims) {
            return null;
        }
        return claims;
    }

    public get name() {
        if (this.claims) {
            return this.claims.given_name;
        }
        return null;
    }

    public get email() {
        if (this.claims) {
            return this.claims.email;
        }
        return null;
    }

    public get phone() {
        if (this.claims) {
            return this.claims.phone_number;
        }
        return null;
    }

    public get company() {
        if (this.claims) {
            return this.claims.company;
        }
        return null;
    }

    ngOnInit() {
    }

    login() {
        this.oauthService.initLoginFlow();
    }

    logout() {
        this.oauthService.logOut();
    }

}
