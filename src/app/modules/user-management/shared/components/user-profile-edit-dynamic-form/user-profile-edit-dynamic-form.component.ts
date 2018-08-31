import { Component, OnInit ,Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile-edit-dynamic-form',
  templateUrl: './user-profile-edit-dynamic-form.component.html',
  styleUrls: ['./user-profile-edit-dynamic-form.component.css']
})
export class UserProfileEditDynamicFormComponent implements OnInit {

  @Input()
  userProfile:any;
  @Input()
  userForm:FormGroup
  @Input()
  isEdit:boolean;
  
  constructor() { }

  ngOnInit() {
  }
  get isValid() { return this.userForm.controls[this.userProfile.variableName].valid; }

}

