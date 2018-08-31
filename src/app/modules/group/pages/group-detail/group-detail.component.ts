import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../services/group.services';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  group:any;
  users:any =[];
  message:String;
  alertClass:String;
  isLoading:Boolean=false;
  constructor(private spinnerService:NgxSpinnerService,private groupService:GroupService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.spinnerService.show();
    this.fetchGroupById(this.route.snapshot.paramMap.get('id'));
     
  }

  fetchGroupById(groupId:String){
    this.groupService.getGroupById(groupId).finally(()=>{
      this.spinnerService.hide();
      this.isLoading=true;
    })
      .subscribe((resp)=>{
        this.group = resp.data;
        this.fetchUsersByGroup(this.group.id);
      },(error)=>{
        this.spinnerService.hide()
        console.log(error)
      })
  }
  fetchUsersByGroup(groupId:String){
        this.groupService.getAllUserToGroup(groupId).finally(()=>{
         this.isLoading=false;
        }).subscribe((userResp)=>{
          this.users=userResp.data.currentPage.items;
        },(error)=>{
          this.message=error;
          this.alertClass="danger";
        })
  }

  onSelect(tab:TabDirective){
    this.users=[];
    if(tab.heading==="Users"){
     
      this.isLoading=true;
        this.fetchUsersByGroup(this.group.id)
    }
  }
  userAddStatus(event:any){
    this.message = event.message;
    this.alertClass = event.alertClass;
  }
}
