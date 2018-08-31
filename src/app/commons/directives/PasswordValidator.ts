import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('newPassword').value; 
       let confirmPassword = AC.get('newRePassword').value; 
        if(password === confirmPassword) {
        
            AC.get('newRePassword').setErrors( null )
        } else {
            AC.get('newRePassword').setErrors({MatchPassword:true})
        }
    }
}