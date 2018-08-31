import { ApiService } from "../../../commons/services/api.service";
import { Injectable } from "@angular/core";
import { RegisterModel } from "../model/register.model";



@Injectable()
export class RegisterService{
    constructor(private _apiSerivce:ApiService){

    }

    registerUser(user:RegisterModel){
        return this._apiSerivce.post('register',user);
    }
}