import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TopHeaderNavBarComponent } from "./shared/components/top-header-nav-bar/top-header-nav-bar.component";
import { SideNavBarComponent } from "./shared/components/side-nav-bar/side-nav-bar.component";
import { OktaAuthService } from "@okta/okta-angular/dist/okta/services/okta.service";
import { TopHearderUserInfoComponent } from "./shared/components/top-hearder-user-info/top-hearder-user-info.component";
import { CommonModule } from "@angular/common";
import { ChangePasswordComponent } from "../change-password/change-password.component";
import { ReactiveFormsModule } from "@angular/forms";
import { OktaAuthWrapper } from "../../commons/services/authWrapper.service";
import { AlertComponent } from "ngx-bootstrap/alert/alert.component";
import { SharedModule } from "../../commons/shared.module";
import { SideMenuItemComponent } from "./shared/components/side-menu-item/side-menu-item.component";

@NgModule({
    imports:[
            DashboardRoutingModule,
            ReactiveFormsModule,
            CommonModule,
            SharedModule
            ],
    declarations:[
        ChangePasswordComponent,
        TopHearderUserInfoComponent,
        TopHeaderNavBarComponent,
        SideNavBarComponent,
        SideMenuItemComponent,
        DashboardComponent],
    exports:[],
    providers:[OktaAuthService,OktaAuthWrapper],

    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export  class DashboardModule { }