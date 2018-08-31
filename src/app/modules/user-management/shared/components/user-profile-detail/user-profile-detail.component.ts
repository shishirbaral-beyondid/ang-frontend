import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { UserSchemaBase } from "../../../model/user.schema.model";
import {
  userProfileList,
  OktaUserProfile
} from "../../../../../../environments/environment";
import {} from "events";
import { UserManagementService } from "../../../services/user-management.service";

@Component({
  selector: "app-user-profile-detail",
  templateUrl: "./user-profile-detail.component.html",
  styleUrls: ["./user-profile-detail.component.css"]
})
export class UserProfileDetailComponent implements OnInit {
  @Input()
  user: any;
  @Input()
  userDetail: any;
  @Output()
  loaderStatus = new EventEmitter();
  @Output()
  userProfileUpdateMessage = new EventEmitter();

  isLoading:boolean=false;

  userForm: FormGroup;
  userProfileList: OktaUserProfile[] = userProfileList;
  userProfileFormField: any[];

  isEdit: Boolean = false;
  constructor(
    private fb: FormBuilder,
    private userManagementService: UserManagementService
  ) {}

  ngOnInit() {
    /*     this.buildForm();
 */

    this.userForm = this.toFormGroup(this.userProfileList);
  }

  buildForm() {
    this.userForm = this.fb.group({
      userId: [this.user.id],
      firstName: [this.user.profile.firstName, Validators.required],
      middleName: [this.user.profile.middleName],
      lastName: [this.user.profile.lastName],
      login: [this.user.profile.login, Validators.required],
      email: [this.user.profile.email, Validators.required],
      secondaryEmail: [this.user.profile.secondaryEmail],
      mobilePhone: [this.user.profile.mobilePhone]
    });
  }
  editUserProfile(user) {
    let group: any = {};
    this.isEdit = true;
    /*  for(let property in this.userSchema){
      if (this.userSchema.hasOwnProperty(property)) {
          console.log("property valule is ", property,this.userSchema[property]);
          let options=
                    {
                      key:property,
                      value:this.userSchema[property],
                      controlType:'text',
                      label:property
                    }
                      
           this.userProfileFormField.push(new UserSchemaBase (options));
      }
    } */

    /*     this.userForm = this.toFormGroup(this.userProfileFormField);
 */

    /* this.userForm = this.fb.group({
        userId:[this.user.id],
        firstName:[this.user.profile.firstName,Validators.required],
        middleName:[this.user.profile.middleName],
        lastName:[this.user.profile.lastName],
        login:[this.user.profile.login,Validators.required],
        email:[this.user.profile.email,Validators.required],
        secondaryEmail:[this.user.profile.secondaryEmail],
        mobilePhone:[this.user.profile.mobilePhone]
      }) */

    this.userForm = this.toFormGroup(this.userProfileList);
  }

  toFormGroup(fieldList) {
    let group: any = {};
    /* this.user.profile.hasOwnProperty(profile.variableName)
          ?(typeof(this.user.profile[profile.variableName] ) ==='object'? 
          this.user.profile[profile.variableName].toString():this.user.profile[profile.variableName].toString() )
          : "", */
    this.userProfileList.forEach(profile => {
      group[profile.variableName] = new FormControl(
        
          this.user.profile.hasOwnProperty(profile.variableName)
          ? 
         this.user.profile[profile.variableName].toString()
          : "",
        this.bindFormValidation(profile.validation)
      );
    });
    group["id"] = new FormControl(this.user.id);
    return new FormGroup(group);
  }
  bindFormValidation(validators: any) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === "required" && validators[validation] === true) {
          formValidators.push(Validators.required);
        } else if (validation === "minLength") {
          formValidators.push(Validators.minLength(validators[validation]));
        } else if (validation === "maxLength") {
          formValidators.push(Validators.maxLength(validators[validation]));
        }
      }
    }
    return formValidators;
  }
  cancelUpdate() {
    this.isEdit = false;
  }

  updateUserProfile() {
    this.isEdit = false;
    this.isLoading = true;
/*     this.loaderStatus.emit({isLoading:true});
 */    console.log(this.userForm);
    if (this.userForm.valid) {
      this.userManagementService
        .updateUser(this.userForm.value)
        .finally(()=>{
          this.isLoading = false;

          console.log("into finally")
        })
        .subscribe(
          resp => {
            this.loaderStatus.emit({isLoading:false});

            this.user = resp.data;
            this.userForm = this.toFormGroup(this.userProfileList);
            this.userProfileUpdateMessage.emit({
              message: "user updated successfully",
              alertClass: "success"
            });
          },
          error => {
            this.loaderStatus.emit({isLoading:false});

            this.userProfileUpdateMessage.emit({
              message: error.error.message,
              alertClass: "danger"
            });
          }
        );
    }
  }
}
