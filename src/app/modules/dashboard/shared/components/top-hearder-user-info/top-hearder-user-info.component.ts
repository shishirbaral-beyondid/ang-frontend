import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserClaims } from '@okta/okta-angular/dist/okta/models/user-claims';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { OAuthService } from 'angular-oauth2-oidc';
import { OktaAuthWrapper } from '../../../../../commons/services/authWrapper.service';

@Component({
  selector: 'app-top-hearder-user-info',
  templateUrl: './top-hearder-user-info.component.html',
  styleUrls: ['./top-hearder-user-info.component.css']
})
export class TopHearderUserInfoComponent implements OnInit {
  userInfo$:BehaviorSubject<any> = new BehaviorSubject({});
  userInfo:any;
  constructor(private oauthService:OAuthService) { 
    
  }

  ngOnInit() {

    this.userInfo = this.oauthService.getIdentityClaims();

   /*  this.getUserInfoObs();
    this.getUserData(); */
  }
  getUserInfoObs(){
    /* this.oktaService.getUser().then((resp)=>{
      this.userInfo$.next(resp);
      
      
    }) */
  }

  getUserData(){
   this.userInfo$.asObservable().subscribe((resp)=>{
      this.userInfo = resp;
   })
  }


  logout(){
      this.oauthService.logOut();
  }
   
}
