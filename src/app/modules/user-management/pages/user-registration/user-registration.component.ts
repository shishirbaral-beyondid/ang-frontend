import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { User } from '../../model/user.model';
import { UserManagementService } from '../../services/user-management.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user:User = new User();
  userForm:FormGroup;
  message:String;
  alertClass:String;
  constructor(private fb : FormBuilder,
    private spinnerService:NgxSpinnerService,
    private userManagementService:UserManagementService) { }

  ngOnInit() {
    this.buildRegistrationForm();
  }

  buildRegistrationForm(){
    this.userForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:[''],
      login:['',Validators.required],
      email:['',Validators.required],
      secondaryEmail:[''],
      mobilePhone:['']

    })

  }

  userRegistrationForm(){
    let userFormData = this.userForm.value;
    if(this.userForm.invalid){
      return false;
    }
    this.userForm.reset();
    this.spinnerService.show();
    this.userManagementService.createOktaUser(userFormData)
    .finally(()=>this.spinnerService.hide())
    .subscribe((resp)=>{
      this.message="User created successfully";
      this.alertClass="success";
    },(error)=>{
      console.log(error);
      this.message=error;
      this.alertClass="danger";
    })
    

  }

}
