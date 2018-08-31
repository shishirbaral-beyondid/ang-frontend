import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { Group } from '../../model/group.model';

@Component({
  selector: 'app-group-add-popup',
  templateUrl: './group-add-popup.component.html',
  styleUrls: ['./group-add-popup.component.css']
})
export class GroupAddPopupComponent implements OnInit {
    groupAddForm:FormGroup;
    group:Group = new Group();
    modalHeader:String;
    closeBtnName:String;
    @Output() action = new EventEmitter();
 
  constructor(public bsModalRef: BsModalRef,
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.buildGroupAddForm();
  }

  buildGroupAddForm(){
    this.groupAddForm = this.fb.group({
      id:[this.group.id,[]],
      name:[this.group.name,[Validators.required]],
      description:this.group.description
    })

  }

  submitGroupForm(){
    if(this.groupAddForm.valid){
      this.bsModalRef.hide();

      this.group=this.groupAddForm.value;
      this.action.emit(this.group);
    }
   

  }
}
