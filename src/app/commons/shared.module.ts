import { NgModule } from "@angular/core";
import { AlertMessageComponent } from "./components/alert-message/alert-message.component";
import { TableTopBarComponent } from "./components/table-top-bar/table-top-bar.component";
import { ApiService } from "./services/api.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./services/auth.interceptor";
import { CommonModule } from "@angular/common";
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { CustomSpinnerComponent } from './components/custom-spinner/custom-spinner.component';
import { DisableControlDirective } from "./directives/disableControl.directive";

@NgModule({
    imports:[

               CommonModule

            ],
    declarations:[
            AlertMessageComponent,
            TableTopBarComponent,
            ConfirmationPopupComponent,
            CustomSpinnerComponent,
            DisableControlDirective
    
    ],
    entryComponents:[ConfirmationPopupComponent],
    providers:[],
    exports:[
                AlertMessageComponent,
                TableTopBarComponent,
                ConfirmationPopupComponent,
                CustomSpinnerComponent,
                DisableControlDirective
        ]
    
})
export class SharedModule {}