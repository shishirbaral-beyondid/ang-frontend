import { Component, OnInit,Input } from '@angular/core';
import { UserManagementService } from '../../../services/user-management.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-user-profile-application',
  templateUrl: './user-profile-application.component.html',
  styleUrls: ['./user-profile-application.component.css']
})
export class UserProfileApplicationComponent implements OnInit {
  @Input()
  applications:any;
  /* applications:any; */
  constructor( private userManagementService:UserManagementService) { }

  ngOnInit() {
/*     this.fetchApplicationByUserId();
 */  }

  

  /* fetchApplicationByUserId(){
      this.userManagementService.getAllApplciationsByUserId(this.user.id)
      .subscribe((resp)=>{
        console.log(resp);
        this.applications = resp.data.currentPage.items;
    },(error)=>{
      console.log(error)
    })
  
    } */

}
