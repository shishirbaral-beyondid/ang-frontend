import { Injectable } from "@angular/core";
import { OktaAuthGuard} from "@okta/okta-angular";
import * as OktaAuth from '@okta/okta-auth-js';
import { OAuthService } from 'angular-oauth2-oidc';
import {environment } from '../../../environments/environment'
import { LoginModel } from "../../modules/login/model/login.model";
@Injectable()
export class OktaAuthWrapper {
  private authClient: any;
  constructor(private oauthService: OAuthService) {
    this.authClient = new OktaAuth({
      url: environment.okta.oidc.orgUrl,
      issuer: environment.okta.oidc.issuer,
      clientId:environment.okta.oidc.clientId,
      redirectUri:environment.okta.oidc.redirectUri
    });
  }
  login(loginModel:LoginModel): Promise<any> {
    return this.oauthService.createAndSaveNonce().then(nonce => {
      return this.authClient.signIn({
        username: loginModel.userName,
        password: loginModel.password
      }).then((response) => {
        if (response.status === 'SUCCESS') {

          return this.authClient.token.getWithoutPrompt({
            clientId: this.oauthService.clientId,
            responseType: ['id_token', 'token'],
            scopes: ['openid', 'profile', 'email'],
            sessionToken: response.sessionToken,
            nonce: nonce,
            redirectUri: environment.okta.oidc.redirectUri

          })
            .then((tokens) => {
              const idToken = tokens[0].idToken;
              const accessToken = tokens[1].accessToken;
              this.authClient.tokenManager.add('okta_id_token', tokens[0]);
               this.authClient.tokenManager.add('okta_access_token', tokens[1]);

              const keyValuePair = `#id_token=${encodeURIComponent(idToken)}&access_token=${encodeURIComponent(accessToken)}`;
              return this.oauthService.tryLogin({
                customHashFragment: keyValuePair,
                disableOAuth2StateCheck: true
              });

            })
        } else {
          return Promise.reject('We cannot handle the ' + response.status + ' status');
        }
      });
    });
  }

  async  logout(){
    this.authClient.tokenManager.clear();
    await this.authClient.signOut(); 
   }
}