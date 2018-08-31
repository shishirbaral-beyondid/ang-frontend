import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ChangePasswordComponent } from "../change-password/change-password.component";


const dashboardRoutes:Routes = [
    {
        path:'',
        component:DashboardComponent,
        children:[
            {
                path:'',
                loadChildren:'./../home/home.module#HomeModule'
            },
            {
                path:'users',
                loadChildren:'./../user-management/user-management.module#UserManagementModule'
            },{
                path:'groups',
                loadChildren:'./../group/group.module#GroupModule'
            },
            {
                path:'changePassword',
                component:ChangePasswordComponent
            }
        ]

        
    }
]

@NgModule({
    imports:[ RouterModule.forChild(dashboardRoutes)],
    declarations:[],
    exports:[RouterModule],
    providers:[]
})

export  class DashboardRoutingModule {}