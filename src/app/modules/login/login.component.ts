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
import { FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { LoginModel } from './model/login.model';
import { OktaAuthWrapper } from '../../commons/services/authWrapper.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signIn: any;
  loginForm:FormGroup
  loginModel:LoginModel = new LoginModel();
  isInvalid:Boolean=false;
  message:String;
  alertClass:String;
  constructor(private oAuthService:OAuthService,
    private router: Router, private fb:FormBuilder,
     private oktaAuthWrapper: OktaAuthWrapper,private spinnerService:NgxSpinnerService) {

  
  }

  ngOnInit() {
      this.checkIfLogIn();
      this.prepareLoginForm();
    
  }

  prepareLoginForm(){
    this.loginForm = this.fb.group({
        userName:[this.loginModel.userName,[Validators.required]],
        password:[this.loginModel.password,[Validators.required]]
      
      
    })

  }

  loginUser(){
    if(this.loginForm.invalid){
      this.isInvalid = true;

      return;
    }
    this.spinnerService.show();

    this.isInvalid=false;
    try{
      this.oktaAuthWrapper.login(this.loginForm.value).then(() => {
        this.spinnerService.hide();
  
        this.router.navigateByUrl('dashboard')
      })
      .catch(err =>{
        this.spinnerService.hide();
  
        console.log('error logging in', err);
        this.message='Authentication fail';
        this.alertClass='danger';
      } );
    }catch(error){
      this.spinnerService.hide();
  
      console.log('error logging in', error);
      this.message=error.message;
      this.alertClass='danger';
    } 
    
  }

  checkIfLogIn(){
    this.spinnerService.show();
    

    if(this.oAuthService.hasValidIdToken()){
      this.router.navigateByUrl('dashboard');
        this.spinnerService.hide();
    }else{
      
      this.prepareLoginForm();
      this.spinnerService.hide();
    }
  }
  closePopUp(){
    this.message ="";
  }

  
  hasValidAccessToken(){
    let idClaims:Object = this.oAuthService.getIdentityClaims();
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
