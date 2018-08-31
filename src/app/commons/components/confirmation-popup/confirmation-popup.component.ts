import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit {

  @Input()
  title:String;

  @Output()
   confirmStatus = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  confirm(){
    this.confirmStatus.emit({confirm:true})
  }

  decline(){
    this.confirmStatus.emit({confirm:false})
  }

}
