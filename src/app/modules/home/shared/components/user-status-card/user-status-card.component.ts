import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-status-card',
  templateUrl: './user-status-card.component.html',
  styleUrls: ['./user-status-card.component.css']
})
export class UserStatusCardComponent implements OnInit {

  @Input()
  title:String;
  @Input()
  userCount:Number;
  constructor() { 
  }

  ngOnInit() {
  }

}
