import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TopHeaderNavBarComponent } from "./shared/components/top-header-nav-bar/top-header-nav-bar.component";
import { SideNavBarComponent } from "./shared/components/side-nav-bar/side-nav-bar.component";
import { OktaAuthService } from "@okta/okta-angular/dist/okta/services/okta.service";
import { TopHearderUserInfoComponent } from "./shared/components/top-hearder-user-info/top-hearder-user-info.component";

@NgModule({
    imports:[DashboardRoutingModule],
    declarations:[
        TopHearderUserInfoComponent,
        TopHeaderNavBarComponent,
        SideNavBarComponent,
        DashboardComponent],
    exports:[],
    providers:[OktaAuthService]
})

export  class DashboardModule { }