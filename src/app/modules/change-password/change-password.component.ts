import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRouteSnapshot } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChangePasswordModel } from './model/changePassword.model';
import { PasswordValidation } from '../../commons/directives/PasswordValidator';
import { UserManagementService } from '../user-management/services/user-management.service';
import { UserManagementModule } from '../user-management/user-management.module';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers:[UserManagementService]
})
export class ChangePasswordComponent implements OnInit {
    changePasswordForm:FormGroup;
    message:String;
    alertClass:String;
    changePasswordModel:ChangePasswordModel = new ChangePasswordModel();
  constructor(private fb:FormBuilder,
  private userManagementService:UserManagementService,
  private spinnerService:NgxSpinnerService) { }

  ngOnInit() {
/*     this.spinnerService.show();
 */   

   this.buildChangePasswordForm();
  }
 buildChangePasswordForm(){
   this.changePasswordForm= this.fb.group({
      oldPassword:[this.changePasswordModel.oldPassword,Validators.compose([Validators.required])],
      newPassword:[this.changePasswordModel.newPassword,Validators.compose([Validators.required])],
      newRePassword:[this.changePasswordModel.newRePassword,Validators.compose([Validators.required])]
   }, {
    validator: PasswordValidation.MatchPassword
  })
   
  }
  
  changePassword(){
        this.spinnerService.show();
        this.userManagementService.changeUserPassword(this.changePasswordForm.value).finally(()=>{
          this.spinnerService.hide()
        }).subscribe((resp)=>{
          this.message="Password Changed sucessfully";
          this.alertClass="success"
        },(error)=>{
            this.message=error.error.message;
            this.alertClass="danger"
          console.log(error)
        })
  }
}
