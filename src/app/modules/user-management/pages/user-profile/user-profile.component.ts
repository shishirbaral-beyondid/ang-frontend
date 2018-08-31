import { Component, OnInit ,TemplateRef,ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserManagementService } from '../../services/user-management.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { BsModalRef ,BsModalService} from 'ngx-bootstrap/modal';
import { TabsetComponent,TabDirective } from 'ngx-bootstrap';
import { forEach } from '@angular/router/src/utils/collection';
import { OktaUserProfile,userProfileList } from '../../../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  userId:String;
  user:any;
  modalRef: BsModalRef;
  modalTitle:String;
  message:String;
  alertClass:String;
  applications:any = [];
  groupsData:any =[];
  isLoading:Boolean=false;
  userDetail:any[] =[];
  userProfileList:OktaUserProfile[] = userProfileList;

  @ViewChild('tabset') tabset: TabsetComponent;
 


  constructor(private route: ActivatedRoute,
    private userManagementService:UserManagementService,
    private spinnerService:NgxSpinnerService,
    private modalService: BsModalService
  ) {
     }

  ngOnInit() {
    this.isLoading=true;
/*     this.spinnerService.show();
 */    this.route.data.subscribe((resp)=>{
      this.user=resp.userProfile.data;
      },(error)=>{
        console.log(error)
      });
    this.fetchApplicationByUserId();
  


  }
  getUserById(userId:String){
    this.userManagementService.getUserById(userId).finally(()=>{
            this.spinnerService.hide();
             this.isLoading=false;
            }).subscribe((resp)=>{
      this.user=resp.data;
     /*  this.userDetail = this.bindUserWithOktaUserProfileList();
      this.isLoading = false; */
    });

  }

  
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

  }

  confirmTerminate(){
      console.log("Confirm Terminate User :::::::::" + this.user.id);
      this.decline();
      /* this.spinnerService.show();
      this.userManagementService.deactivateUserById(this.user.id).finally(()=>{
        this.spinnerService.hide();
      }).subscribe((resp)=>{
        this.message="user terminated successfully";
        this.alertClass="success";
      },error=>{
        this.message=error;
        this.alertClass="danger";
      }) */
     
  }
  confirmSuspend(){
    console.log("Confirm Suspend  User :::::::::" + this.user.id);
    this.decline();
   /*  this.spinnerService.show();
    this.userManagementService.suspendUserById(this.user.id).finally(()=>{
      this.spinnerService.hide();
    }).subscribe((resp)=>{
      this.message="user suspended successfully";
      this.alertClass="success";
    },error=>{
      this.message=error;
      this.alertClass="danger";
    }) */
   
  }
  decline(){
    this.modalRef.hide();
  }
  onSelect(tab:TabDirective){
      if(tab.active === true && tab.heading === 'Application'){
        this.isLoading =true;
          this.fetchApplicationByUserId();
      }else if(tab.active === true && tab.heading === 'Groups'){
          this.isLoading = true;
        this.fetchGroupByUserId();
      }else if(tab.active === true && tab.heading === 'Profile'){
          this.isLoading = true;
        this.getUserById(this.user.id);
      }


  }
  
  fetchApplicationByUserId(){
    this.applications = []
    this.userManagementService.getAllApplciationsByUserId(this.user.id)
   .finally(()=>{
     this.isLoading=false;
     this.spinnerService.hide()
   }) .subscribe((resp)=>{
      this.applications = resp.data.currentPage.items;
  },(error)=>{
    console.log(error)
  })

  }
   bindUserWithOktaUserProfileList():any{
    let detail:any=[];

    
       userProfileList.forEach(profile=>{
        if(this.user.profile.hasOwnProperty(profile.variableName)){
          detail.push( {
            displayName:profile.displayName,
            value:this.user.profile[profile.variableName]
          })
        }
  
    }) 
    return detail;
  }

  fetchGroupByUserId(){
    this.groupsData = [];
    this.userManagementService.getAllGroupsByUserId(this.user.id)
    .finally(()=>{
      this.spinnerService.hide()
      this.isLoading = false;
    }).subscribe((resp)=>{
            this.groupsData = resp.data.currentPage.items;
        },(error)=>{
          console.log(error)
        })

  }

  userAddedToGroupStatus(event:any){
    console.log(event.message);
    this.message = event.message;
    this.alertClass = event.alertClass;

  }
/*   updateUser(event){
    this.isLoading = true;
   
  } */

  loaderStatus(loading:any){
    console.log(loading)
    debugger;
     this.isLoading = loading.isLoading;
   }
  
  userProfileUpdateMessage(event){
    this.message = event.message;
    this.alertClass = event.alertClass;
  }
}
