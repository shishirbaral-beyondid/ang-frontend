import { Component, OnInit,Input ,TemplateRef,Output,EventEmitter} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalRef,BsModalService } from 'ngx-bootstrap';
import { ConfirmationPopupComponent } from '../../../../../commons/components/confirmation-popup/confirmation-popup.component';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { UserManagementService } from '../../../../user-management/services/user-management.service';
import { GroupService } from '../../../services/group.services';

@Component({
  selector: 'app-group-user-list',
  templateUrl: './group-user-list.component.html',
  styleUrls: ['./group-user-list.component.css'],
  providers:[UserManagementService]
})
export class GroupUserListComponent implements OnInit {

  @Input()
  group:any
  @Input()
  users:any;

  @Output()
   userAddStatus = new EventEmitter()
  modalRef:BsModalRef;
  selectedUsers:any;
  userForm:FormGroup;
  dropdownSettings = {};
  itemList:any[]=[];

  constructor(private spinnerService:NgxSpinnerService
    ,private fb:FormBuilder, private modalService:BsModalService,
    private groupService:GroupService,
    private userService:UserManagementService) { }

  ngOnInit() {
    this.spinnerService.show();


    this.dropdownSettings = { 
      text: "Select Users",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      labelKey: "email",
      noDataLabel: "Search user by email...",
      enableSearchFilter: true,
      searchBy: ['email']
    };
    
    this.userForm = this.fb.group({
      selectedUsers: [[], Validators.required]
  })
  }

  onSearch(event:any){

    this.userService.searchUserByEmail(event.target.value).subscribe((resp)=>{
      this.itemList = resp.data.currentPage.items.map(user=>{
        return{
          id:user.id,
          email:user.profile.email
        }
      })
    },(error)=>{
      console.log(error)
    })
  }
  openConfirmModal(userId:String){
      const initialState ={
        title:"Remove user from group"
      }

      this.modalRef = this.modalService.show(ConfirmationPopupComponent ,{initialState})
      this.modalRef.content.confirmStatus.subscribe((confirmResp)=>{
        if(confirmResp.confirm){
          this.removeUserFromGroup(userId);
        }
        this.modalRef.hide();
      })
  }

  removeUserFromGroup(userId:String){
    this.spinnerService.show();
    this.groupService.removeUserFromGroup(userId,this.group.id)
    .finally(()=>{
      this.spinnerService.hide()
    }).subscribe((resp)=>{
      this.fetchUsersByGroup();
      this.userAddStatus.emit({
        message:"User  successfully removed from group",
      alertClass:"success"
    });
    },(error)=>{
      this.userAddStatus.emit({
        message:error.toString(),
      alertClass:"danger"
    });
    })
    
  }
  openModal(template: TemplateRef<any>){
    this.selectedUsers =[];
    this.itemList = [];
    this.modalRef = this.modalService.show(template);

  }

  submitUserAddForm(){
    if(this.userForm.valid){

      this.spinnerService.show();
      let usersList = this.userForm.value.selectedUsers;
      this.userForm.reset;
      this.modalRef.hide();
      this.selectedUsers = [];
      this.groupService.addUsersToGroup(usersList,this.group.id)
      .finally(()=>{
        this.spinnerService.hide()
      }).subscribe((resp)=>{
        this.fetchUsersByGroup();
        this.userAddStatus.emit({
          message:"User  successfully added to group",
        alertClass:"success"
      });
      },(error)=>{
        console.log(error)
        this.userAddStatus.emit({
          message:error.toString(),
        alertClass:"success"
      });
      })
    }
  }

  fetchUsersByGroup(){
      this.spinnerService.show();
    this.groupService.getAllUserToGroup(this.group.id).finally(()=>{
        this.spinnerService.hide()
    }).subscribe((resp)=>{
      this.users =resp.data.currentPage.items;
    },(error)=>{
      this.userAddStatus.emit({
        message:error.toString(),
      alertClass:"success"
    });
    })
  }
}
