import { Component, OnInit } from "@angular/core";
import { UserManagementService } from "../../services/user-management.service";
import { User } from "../../model/user.model";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { ConfirmationPopupComponent } from "../../../../commons/components/confirmation-popup/confirmation-popup.component";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  message: String;
  alertClass: String;
  modalRef: BsModalRef;

  users: any;
  constructor(
    private _userManagementService: UserManagementService,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.spinner.show();

    this._userManagementService
      .getUsers()
      .finally(() => this.spinner.hide())
      .subscribe(
        resp => {
          this.users = resp.data;
        },
        error => {
          this.message = error;
          this.alertClass = "danger";
          console.log(error);
        }
      );
  }
  editUser(userId: String) {
    this.router.navigateByUrl("/dashboard/users/" + userId);
  }

  deleteUser(userId: string) {
    const initialState = {
      title: "Are you sure you want to delete group?"
    };
    this.modalRef = this.modalService.show(ConfirmationPopupComponent, {
      initialState
    });
    this.modalRef.content.confirmStatus.subscribe(resp => {
      if (resp.confirm) {
        this.deleteUserById(userId);
      }
      this.modalRef.hide();
    });
  }

  deleteUserById(userId: string) {
   /*  this.spinner.show();
    this._userManagementService
      .deleteUserById(userId)
      .finally(() => this.spinner.hide())
      .subscribe(
        resp => {
          this.getUserData();
          this.message = "User deleted successfully";
          this.alertClass = "success";
        },
        error => {
          this.message = error.error.message;
          this.alertClass = "danger";
        }
      ); */
  }
}
