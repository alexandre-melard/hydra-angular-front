import {Injectable} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private oauthService: OAuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.oauthService.hasValidIdToken()) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}
