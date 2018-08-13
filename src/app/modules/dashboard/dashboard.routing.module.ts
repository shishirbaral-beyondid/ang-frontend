import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";


const dashboardRoutes:Routes = [
    {
        path:'',
        component:DashboardComponent,
        children:[
            {path:'',
            loadChildren:'./../home/home.module#HomeModule'
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