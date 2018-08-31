import { Component, OnInit,TemplateRef } from '@angular/core';
import { GroupService } from '../../services/group.services';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GroupAddPopupComponent } from '../group-add-popup/group-add-popup.component';
import { Group } from '../../model/group.model';
import { ConfirmationPopupComponent } from '../../../../commons/components/confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  message:String;
  alertClass:String;
  modalRef: BsModalRef;

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  groups:any;
  group:any;
  constructor(private groupService:GroupService,private spinnerService:NgxSpinnerService,
  private modalService:BsModalService) { }

  ngOnInit() {
    this.fetchAllGroup();
   
  }
  fetchAllGroup(){
    this.spinnerService.show();
    this.groupService.getAllGroups().finally(()=>this.spinnerService.hide())
        .subscribe((resp)=>{
            this.groups = resp.data.currentPage.items;
        },(error)=>{
          console.log(error);
        })
  }
  openGroupAddModal(){
    const initialState = {
      modalHeader:"Add Group"
    }
  
    this.modalRef = this.modalService.show(GroupAddPopupComponent, {initialState});
    this.modalRef.content.closeBtnName = 'Close';
    
    this.modalRef.content.action.take(1).subscribe((value) => {
          this.spinnerService.show();
           this.groupService.addGroup(value).finally(()=>{
            this.spinnerService.hide();
              this.showSuccessMessage("Group added successfully");
          }).subscribe((resp)=>{
              this.fetchAllGroup();
          },(error)=>{
            this.spinnerService.hide()
           this.showErrorMessage(error.toString())
            console.log(error); 
          }) 

      });
  }
  editGroup(groupId:String){
    const initialState = {
      modalHeader:"Update Group"
    }
    this.fetchGroupById(groupId);
      /* this.group=this.fetchGroupById(groupId);
    this.modalRef = this.modalService.show(GroupAddPopupComponent, {initialState});
    this.modalRef.content.closeBtnName = 'Close';
    this.modalRef.content.group = this.group; */
  }
  deleteGroup(groupId:String){
    const initialState = {
      title:"Are you sure you want to delete group?",
     
    }
     this.modalRef=  this.modalService.show(ConfirmationPopupComponent,{initialState});
      this.modalRef.content.confirmStatus.subscribe((resp)=>{
        if(resp.confirm){
            this.deleteGroupById(groupId);
        }
        this.modalRef.hide();
      })
  }

  fetchGroupById(groupId:String){
    this.spinnerService.show();
    this.groupService.getGroupById(groupId).finally(()=>{
      this.spinnerService.hide();
    }).subscribe((resp)=>{
      const initialState = {
        modalHeader:"Update Group",
        group:{
          id:resp.data.id,
          name:resp.data.profile.name,
          description:resp.data.profile.description
        },
        closeBtnName:"Close"
      }
      this.modalRef = this.modalService.show(GroupAddPopupComponent,{initialState} );
      this.modalRef.content.action.take(1).subscribe((value) => {
          if(value.id!== null || value.id !=="" || value.id!== undefined){
            this.updateGroup(value);
          }       

    });
    },(error)=>{
      console.log(error)
    })
  }

  updateGroup(value:Group){
    this.spinnerService.show();
    this.groupService.updateGroup(value).subscribe((resp)=>{
          this.showSuccessMessage("Group updated successfully");
          this.fetchAllGroup();
    },(error)=>{
      this.showErrorMessage(error.toString())
    })
  }
  showSuccessMessage(message:String){
    this.alertClass="success";
    this.message=message;
  }

  showErrorMessage(message:String){
    this.alertClass="danger";
    this.message=message;
  }

  deleteGroupById(groupId:String){
    //commented temporary to prevent deleted important group remove later by Dinesh
   /*  this.spinnerService.show();
      this.groupService.deleteGroupById(groupId).
        finally(()=>this.spinnerService.hide()).subscribe((resp)=>{
          this.fetchAllGroup();
            this.showSuccessMessage("Group deleted successfully");
        },(error)=>{
          this.showErrorMessage(error.tosString())
        }) */
  }
}
