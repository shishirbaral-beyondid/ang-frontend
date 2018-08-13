import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular/dist/okta/services/okta.service';

@Component({
  selector: 'app-top-hearder-user-info',
  templateUrl: './top-hearder-user-info.component.html',
  styleUrls: ['./top-hearder-user-info.component.css']
})
export class TopHearderUserInfoComponent implements OnInit {

  constructor(private oktaService:OktaAuthService) { }

  ngOnInit() {
  }

  logout(){
    debugger;
      this.oktaService.logout('/');
  }
}
