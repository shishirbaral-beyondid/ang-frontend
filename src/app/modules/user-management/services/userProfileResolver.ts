import { Resolve,ActivatedRouteSnapshot ,RouterStateSnapshot} from "@angular/router";
import { UserManagementService } from "./user-management.service";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";


@Injectable()
export class UserProfileResolver implements Resolve<any>{

constructor(private userManagementService:UserManagementService){
    
}
resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<any> {
    return this.userManagementService.getUserById(route.paramMap.get('id'))
}
}