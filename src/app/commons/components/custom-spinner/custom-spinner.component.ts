import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-custom-spinner',
  templateUrl: './custom-spinner.component.html',
  styleUrls: ['./custom-spinner.component.css']
})
export class CustomSpinnerComponent implements OnInit {

  @Input()
  size:String='lg'
  constructor() { }

  ngOnInit() {
  }

}
