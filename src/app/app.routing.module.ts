import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import {
    OktaAuthGuard,
    OktaAuthModule,
    OktaCallbackComponent,
  } from '@okta/okta-angular';
  import {environment} from '../environments/environment';
import { LoginComponent } from "./modules/login/login.component";
import { Page404Component } from "./page-404/page-404.component";
import { AuthGuard } from "./commons/services/auth.guard.service";
import { RegisterComponent } from "./modules/register/register.component";
import { ChangePasswordComponent } from "./modules/change-password/change-password.component";
import { OAuthModule } from "angular-oauth2-oidc";
  
 const oktaConfig = Object.assign({
    onAuthRequired: ({oktaAuth, router}) => {
      router.navigate(['']);
    }
  }, environment.okta.oidc);
  
 
const appRoutes: Routes = [
  
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path:'',
      redirectTo:'login',
      pathMatch:'full'

    },{
      path:'register',
      component:RegisterComponent
    },
    {
      path: 'dashboard',
      loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule',
      canActivateChild: [ AuthGuard ]  

    },
    
    
     {
      path:'404',
      component:Page404Component
    },
    {
      path:'**',
      redirectTo:'404',
      pathMatch:'full'
    } 
    
  ];

@NgModule({
    imports:[   
         RouterModule.forRoot(appRoutes),
      
       
    ],
    declarations:[],
    exports:[RouterModule]
})
export class AppRoutingModule {}