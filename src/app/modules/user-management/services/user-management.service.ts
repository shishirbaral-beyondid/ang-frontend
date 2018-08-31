import { Injectable } from "@angular/core";
import { ApiService } from "../../../commons/services/api.service";
import { User } from "../model/user.model";
import { Observable } from "rxjs/Observable";
import { ChangePasswordModel } from "../../change-password/model/changePassword.model";
import { OAuthService } from "angular-oauth2-oidc";
import { Group } from "../../group/model/group.model";



@Injectable()
export class UserManagementService{
    constructor(private _apiService:ApiService,private oauthService:OAuthService){

    }

    getUsers():Observable<any>{
      return  this._apiService.get('users');
    }

    createOktaUser(user:User){
      return this._apiService.post('users',user);
    }
    getUserById(userId:String){
      return this._apiService.get('users/'+userId);
    }

    getAllGroupsByUserId(userId:String){
      
      return this._apiService.get('users/'+userId+'/groups')
    }

    getAllApplciationsByUserId(userId:String){
      return this._apiService.get('users/'+userId+'/applications')
    }

    changeUserPassword(changePasswordDto:ChangePasswordModel){
      let userId;
      let idClaims:Object = this.oauthService.getIdentityClaims();
      if(idClaims.hasOwnProperty("sub")){
        userId=idClaims["sub"];
      }  
          return this._apiService.post('users/'+userId+'/changePassword',changePasswordDto)
    }

    addUserToGroups(groups:any [],userId:String){
     
      
      return this._apiService.post('users/'+userId+'/groups',groups)
    }

    removeGroupFromUserById(groupId:String,userId:String){
    
     return this._apiService.delete("users/"+ userId+"/groups/"+groupId)
    }

    searchUserByEmail(email:String){
      return this._apiService.get('users/searchByEmail/'+email);
    }

    suspendUserById(userId:String){
      return this._apiService.get("users/"+userId+"/suspend")
    }
    deactivateUserById(userId:String){
      return this._apiService.get("users/"+userId+"/deactivate")
    }

    getUserSchemaById(userId:String){
      return this._apiService.get("users/"+userId+"/schema")
    }

    updateUser(user:any){
      return this._apiService.put("users/"+user.id,user)
    }

    deleteUserById(userId:string){
      return this._apiService.delete("users/"+userId);
    }
}