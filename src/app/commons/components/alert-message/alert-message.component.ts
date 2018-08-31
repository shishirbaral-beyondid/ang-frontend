import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {

  @Input()
  message:String;
  @Input()
  alertClass:String;
  constructor() { }

  ngOnInit() {
  }

  closePopUp(){
    this.message="";
  }

}
