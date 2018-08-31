import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { UserListComponent } from "./pages/user-list/user-list.component";
import { UserRegistrationComponent } from "./pages/user-registration/user-registration.component";
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";
import { UserProfileResolver } from "./services/userProfileResolver";


const routes:Routes  =[

    {
    path:'' ,
    component:UserListComponent
    },
    {
        path:'register',
        component:UserRegistrationComponent


    },
    {
        path:':id',
        component:UserProfileComponent,
        resolve:{
            userProfile:UserProfileResolver
        }
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    declarations:[],
    exports:[RouterModule],
    providers:[UserProfileResolver]
})

export default class UserManagementRoutingModule {}