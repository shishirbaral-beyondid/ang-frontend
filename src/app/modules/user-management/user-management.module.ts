import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { UserListComponent } from "./pages/user-list/user-list.component";
import { UserRegistrationComponent } from "./pages/user-registration/user-registration.component";
import UserManagementRoutingModule from "./user-management-routing.module";
import { UserManagementService } from "./services/user-management.service";
import { ApiService } from "../../commons/services/api.service";
import { CommonModule } from "@angular/common";
import { AlertMessageComponent } from "../../commons/components/alert-message/alert-message.component";
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UserProfileComponent } from './pages/user-profile/user-profile.component'
import { TableTopBarComponent } from "../../commons/components/table-top-bar/table-top-bar.component";
import { SharedModule } from "../../commons/shared.module";
import { UserProfileResolver } from "./services/userProfileResolver";
import { TabsModule,TooltipModule } from "ngx-bootstrap";
import { UserProfileDetailComponent } from './shared/components/user-profile-detail/user-profile-detail.component';
import { UserProfileGroupComponent } from './shared/components/user-profile-group/user-profile-group.component';
import { UserProfileApplicationComponent } from './shared/components/user-profile-application/user-profile-application.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { GroupService } from "../group/services/group.services";
import { ConfirmationPopupComponent } from "../../commons/components/confirmation-popup/confirmation-popup.component";
import { UserProfileEditDynamicFormComponent } from './shared/components/user-profile-edit-dynamic-form/user-profile-edit-dynamic-form.component';
import { UserProfileDynamicFormFieldComponent } from './shared/components/user-profile-dynamic-form-field/user-profile-dynamic-form-field.component';
import { DisableControlDirective } from "../../commons/directives/disableControl.directive";

@NgModule({
    imports:[
                UserManagementRoutingModule,
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                SharedModule,
                TabsModule.forRoot(),
                TooltipModule.forRoot(),
                AngularMultiSelectModule
             ],
    declarations:[
                UserListComponent,
                UserRegistrationComponent,
                UserProfileComponent,
                UserProfileDetailComponent,
                UserProfileGroupComponent,
                UserProfileApplicationComponent,
                UserProfileEditDynamicFormComponent,
                UserProfileDynamicFormFieldComponent,
                ],
    entryComponents:[ConfirmationPopupComponent],
    providers:[UserManagementService,GroupService],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
})

export  class UserManagementModule {}