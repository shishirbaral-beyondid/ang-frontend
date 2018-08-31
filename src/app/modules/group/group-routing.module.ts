import { NgModule } from "@angular/core";
import { Routes,RouterModule} from "@angular/router";
import { GroupComponent } from "./pages/group/group.component";
import { GroupDetailComponent } from "./pages/group-detail/group-detail.component";


const routes:Routes=[
        {
            path:'',
            component:GroupComponent
        },
        {
            path:':id',
            component:GroupDetailComponent
        }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    declarations:[],
    exports:[RouterModule]
})

export class GroupRoutingModule {}