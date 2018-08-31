import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { CanActivateChild } from '@angular/router/src/interfaces';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private oauthService: OAuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("Has valid access token = " ,this.oauthService.hasValidIdToken());
    if (this.oauthService.hasValidIdToken()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
    }


    //since oauthservice check validaccesstoken from expire_at localStroage variable 
    //and there is no variable expire_at so custom function to check accesstoken expire
    hasValidAccessToken(){
      let idClaims:Object = this.oauthService.getIdentityClaims();
      let expAt;
      if(idClaims.hasOwnProperty("exp")){
        expAt=idClaims["exp"];
      }  
      const date = new Date(0); 
      date.setUTCSeconds(expAt);
      let now = new Date();
      
      if(expAt && date.valueOf()<now.valueOf()){
        return false;
      }
      return true;

    }
}