import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GroupRoutingModule } from "./group-routing.module";
import { GroupService } from "./services/group.services";
import { CommonModule } from "@angular/common";
import { GroupComponent } from "./pages/group/group.component";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GroupAddPopupComponent } from './pages/group-add-popup/group-add-popup.component'
import { ModalModule } from "ngx-bootstrap/modal/modal.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AlertMessageComponent } from "../../commons/components/alert-message/alert-message.component";
import { SharedModule } from "../../commons/shared.module";
import { GroupDetailComponent } from './pages/group-detail/group-detail.component';
import { TooltipModule,TabsModule } from "ngx-bootstrap/";
import { GroupUserListComponent } from './shared/components/group-user-list/group-user-list.component';
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";

@NgModule({
    imports:[
                GroupRoutingModule,
                CommonModule,
                InfiniteScrollModule,
                TabsModule.forRoot(),
                ModalModule.forRoot(),
                ReactiveFormsModule,
                SharedModule    ,
                TooltipModule.forRoot(),
                AngularMultiSelectModule
            ],
    declarations:[
        GroupComponent,
        GroupAddPopupComponent,
        GroupDetailComponent,
        GroupUserListComponent
    
    ],
    entryComponents:[GroupAddPopupComponent],
    providers:[GroupService],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
    
})

export class GroupModule {}