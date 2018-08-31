import { Injectable } from "@angular/core";
import { ApiService } from "../../../commons/services/api.service";



@Injectable()
export class HomeService{
    constructor(private _apiService:ApiService){

    }

    getUserCount(){
       return this._apiService.get('dashboard/userStatusCount')
    }
}