import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import {
    OktaAuthGuard,
    OktaAuthModule,
    OktaCallbackComponent,
  } from '@okta/okta-angular';
  import {environment} from '../environments/environment';
import { LoginComponent } from "./modules/login/login.component";
  
const oktaConfig = Object.assign({
    onAuthRequired: ({oktaAuth, router}) => {
      // Redirect the user to your custom login page
      router.navigate(['/login']);
    }
  }, environment.okta.oidc);
  

const appRoutes: Routes = [
    {
      path: '',
      redirectTo:'dashboard',
      pathMatch:'full'
    },
    {
      path: 'callback',
      component: OktaCallbackComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'dashboard',
      loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule',
        canActivate: [ OktaAuthGuard ]  

    }
    
  ];

@NgModule({
    imports:[   
         RouterModule.forRoot(appRoutes),
         OktaAuthModule.initAuth(oktaConfig)

    ],
    declarations:[],
    exports:[RouterModule]
})
export class AppRoutingModule {}