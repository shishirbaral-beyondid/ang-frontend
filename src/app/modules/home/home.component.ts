import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from './services/home.services';
import { UserCountDto } from './model/userCount.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userCount:UserCountDto;
  constructor(private spinnerService:NgxSpinnerService,
    private homeService:HomeService
  ) { }

  ngOnInit() {
    this.fetchUserCount();
  }
  fetchUserCount(){
    this.spinnerService.show();
    this.homeService.getUserCount().finally(()=>{
        this.spinnerService.hide();
    }).subscribe((resp)=>{
        this.userCount=resp.data;
    },(error)=>{
      console.log(error);
    })
  }

}
