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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './modules/login/login.component';
import { OktaAuthService } from '@okta/okta-angular/dist/okta/services/okta.service';
import { ApiService } from './commons/services/api.service';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './commons/services/auth.interceptor';
import {CommonModule} from '@angular/common';
import { Page404Component } from './page-404/page-404.component';
import { ModalModule } from 'ngx-bootstrap';
import { OktaAuthWrapper } from './commons/services/authWrapper.service';
import { ReactiveFormsModule } from '@angular/forms';
import { OAuthService, UrlHelperService, OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuard } from './commons/services/auth.guard.service';
import { RegisterComponent } from './modules/register/register.component';
import { AlertMessageComponent } from './commons/components/alert-message/alert-message.component';
import { SharedModule } from './commons/shared.module';
import { ChangePasswordComponent } from './modules/change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page404Component,
    RegisterComponent,
     ],
  imports: [
    OAuthModule.forRoot(),
    ModalModule.forRoot(),
    NgxSpinnerModule,
    CommonModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
   /*  BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,})  */
  ],
  providers: [ApiService ,  
      NgxSpinnerService,
      OktaAuthWrapper,
      OAuthService,
      UrlHelperService,
      AuthGuard,


     {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export  class AppModule { }
