import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { RegisterModel } from './model/register.model';
import { EmailValidator } from '@angular/forms/src/directives/validators';
import { NgxSpinnerService } from 'ngx-spinner';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {

  isInvalid:Boolean =false;
  message:String;
  alertClass:String;
  registrationForm:FormGroup;
  registerModel:RegisterModel = new RegisterModel();
  constructor( private formBuilder:FormBuilder,
    private registerService:RegisterService,
    private spinnerService:NgxSpinnerService) { }

  ngOnInit() {
   
    this.buildRegisterForm();

  }

  buildRegisterForm(){
    this.registrationForm = this.formBuilder.group({
      firstName :[this.registerModel.firstName,Validators.compose([Validators.required])],
      lastName: [this.registerModel.lastName , Validators.compose([])],
      email :[this.registerModel.email , Validators.compose([Validators.required])],
      login:[this.registerModel.login,Validators.compose([Validators.required])],
      mobilePhone:[this.registerModel.mobilePhone,Validators.compose([])]
    })
  }

  registerUser(){

    if(this.registrationForm.invalid){
      this.isInvalid= true;
      return;
    }
    this.isInvalid= false;
    this.spinnerService.show();
      this.registerModel = this.registrationForm.value;
      this.registrationForm.reset();
      this.registerService.registerUser(this.registerModel).finally(()=>{
        this.spinnerService.hide();
      }).subscribe((resp)=>{
        if(resp.status ===201){
            this.message= resp.message;
            this.alertClass = 'success'
        }else{
          this.message =resp.message;
          this.alertClass = 'danger';

        }
      },(error)=>{
        this.message =error.error.message;
        this.alertClass = 'danger';

      })
  }

}
