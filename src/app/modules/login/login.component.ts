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

import { Component, OnInit } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget/dist/js/okta-sign-in.min.js';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signIn: any;

  constructor(oktaAuth: OktaAuthService, router: Router) {

    this.signIn = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an ODIC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: environment.okta.oidc.issuer.split('/oauth2')[0],
      clientId: environment.okta.oidc.clientId,
      redirectUri: environment.okta.oidc.redirectUri,
      logo: '/assets/angular.svg',
      i18n: {
        en: {
          'primaryauth.title': 'Sign in ',
        },
      },
      authParams: {
        responseType: ['id_token', 'token'],
        issuer: environment.okta.oidc.issuer,
        display: 'page',
        scopes: environment.okta.oidc.scope.split(' '),
      },
    });

  }

  ngOnInit() {

    console.log(this.signIn);
    this.signIn.renderEl(
      { el: '#sign-in-widget' },
      (res) => {
       
        console.log(res);
        if (res.status === 'SUCCESS') {
          this.signIn.loginRedirect('/', { sessionToken: res.session.token });
          // Hide the widget
          this.signIn.hide();
        }
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      (err) => {
        throw err;
      },
    );
  }

}
