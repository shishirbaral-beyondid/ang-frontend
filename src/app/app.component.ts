/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Router } from "@angular/router";
import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAuthenticated: boolean;
  constructor( private oauthService:OAuthService, private router: Router) {
    this.oauthService.redirectUri = environment.okta.oidc.redirectUri;
    this.oauthService.clientId = environment.okta.oidc.clientId;
    this.oauthService.scope = environment.okta.oidc.scope;
    this.oauthService.issuer = environment.okta.oidc.issuer;
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.setStorage(localStorage);
     this.oauthService.loadDiscoveryDocument().then(() => {
      this.oauthService.tryLogin()
    }); 
  }
   ngOnInit() {
 }
  
}
