import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserStatusCardComponent } from './shared/components/user-status-card/user-status-card.component';
import { HomeService } from './services/home.services';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, UserStatusCardComponent],
  providers:[HomeService]
})
export class HomeModule { }
