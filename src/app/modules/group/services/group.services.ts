import { Injectable } from "@angular/core";
import { ApiService } from "../../../commons/services/api.service";
import { Group } from "../model/group.model";


@Injectable()
export class GroupService{
    constructor(private _apiService:ApiService){

    }

    getAllGroups(){
     return   this._apiService.get('groups');
    }

    addGroup(group:Group){
        return this._apiService.post('groups',group);
    }

    searchGroupByName(groupName:String){
        return this._apiService.get('groups/searchByName/'+groupName)
    }

    getGroupById(groupId:String){
        return this._apiService.get('groups/'+groupId);
    }

    updateGroup(group:Group){
        return this._apiService.put('groups/',group)
    }

    deleteGroupById(groupId:String){
        return this._apiService.delete('groups/'+groupId);
    }

    getAllUserToGroup(groupId:String){
        return this._apiService.get("groups/"+groupId+'/users')
    }

    addUsersToGroup(users:any[],groupId){
        return this._apiService.post("groups/"+groupId+"/users",users)
    }

    removeUserFromGroup(userId:String,groupId:String){
        return this._apiService.delete("groups/"+groupId+"/users/"+userId)
    }
}