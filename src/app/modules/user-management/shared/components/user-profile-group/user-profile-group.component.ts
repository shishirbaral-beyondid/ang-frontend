import { Component, OnInit,Input,TemplateRef,Output,EventEmitter } from '@angular/core';
import { UserManagementService } from '../../../services/user-management.service';
import { Router } from '@angular/router';
import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup ,Validators,FormBuilder} from '@angular/forms';
import { GroupService } from '../../../../group/services/group.services';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationPopupComponent } from '../../../../../commons/components/confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-user-profile-group',
  templateUrl: './user-profile-group.component.html',
  styleUrls: ['./user-profile-group.component.css']
})
export class UserProfileGroupComponent implements OnInit {
  modalRef: BsModalRef;
  itemList:any= [] ;
  selectedItems = [];
  dropdownSettings = {};

  groupForm:FormGroup;

  @Input()
  groupsData:any;
  @Input()
  user:any;
  @Output() groupAddStatus = new EventEmitter();

  constructor(private userManagementService:UserManagementService,
    private fb:FormBuilder,
    private router:Router,
    private spinnerService:NgxSpinnerService,
    private groupService:GroupService,
    private modalService: BsModalService) { }

  ngOnInit() {
    

    this.dropdownSettings = { 
      text: "Select Group",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      labelKey: "name",
      noDataLabel: "Search Group...",
      enableSearchFilter: true,
      searchBy: ['name']
    }; 
/*     this.fetchGroupByUserId(this.user.id);
 */  
      this.groupForm = this.fb.group({
          selectedGroups: [[], Validators.required]
      })
}
    onSearch(evt: any) {
      this.itemList = [];
      this.groupService.searchGroupByName(evt.target.value).subscribe((resp)=>{
        this.itemList =resp.data.currentPage.items.map(item=>{
          return {
            id: item.id,
            name:item.profile.name
          }
        })
        
      
      },(error)=>{
        console.log(error);
      })
      
    }
    
  fetchGroupByUserId(userId){
    this.userManagementService.getAllGroupsByUserId(userId).finally(()=>{
      this.spinnerService.hide()
    })
        .subscribe((resp)=>{
            this.groupsData = resp.data.currentPage.items;
        },(error)=>{
          console.log(error)
        })

  }

  goToGroup(group){
    this.router.navigateByUrl('dashboard/groups/'+group.id);
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);

  }


  submitGroupAddForm(){
      
    if(this.groupForm.valid){
      this.spinnerService.show()
      let groupList =this.groupForm.value.selectedGroups;
      this.groupForm.reset;
      this.modalRef.hide();
      this.selectedItems = [];
      this.userManagementService.addUserToGroups(groupList,this.user.id)
        .subscribe((resp)=>{
          this.fetchGroupByUserId(this.user.id);
          this.groupAddStatus.emit({
            message:"User added successfully added to group",
          alertClass:"success"
        });
        },(error) =>{
          console.log(error);
          this.groupAddStatus.emit({
            message:error,
          alertClass:"danger"
        });
        })
     }
    }

    openConfirmModal(groupId:String){
      const initialState = {
        
        title: 'Are you sure you want to remove group?'
      };
      this.modalRef = this.modalService.show(ConfirmationPopupComponent, {initialState});
      this.modalRef.content.confirmStatus.subscribe((resp)=>{
        
        
          if(resp.confirm){
              this.removeGromFromUser(groupId);
          }
          this.modalRef.hide();
      })
      
    }
    removeGromFromUser(groupId:String){
        this.spinnerService.show();
        this.userManagementService.removeGroupFromUserById(groupId,this.user.id).subscribe((resp)=>{
          this.fetchGroupByUserId(this.user.id);

          this.groupAddStatus.emit({
            message:"User successfully removed group",
          alertClass:"success"
        });
        },(error)=>{
          console.log(error);
          this.groupAddStatus.emit({
            message:error,
          alertClass:"danger"
        });
        })
    }
             
}
