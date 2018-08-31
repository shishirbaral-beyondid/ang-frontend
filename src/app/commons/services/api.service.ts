import { Injectable } from '@angular/core';
import { Http, Headers,ResponseContentType  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Router} from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient ,HttpHeaders} from '@angular/common/http';


 
@Injectable()
export class ApiService {
    private APP_URI = environment.okta.resourceServer.url;
    constructor( private http: HttpClient, private router:Router){

    }

    private    setHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers.set( 'Content-Type', 'application/json' );
        headers.set( 'Accept', 'application/json' );
            
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        /*  if( this.oktaService.getAccessToken() ) { */
           /*  headers.append( 'Authorization', 'Bearer ' + "eyJraWQiOiJPRTJDODF0a3J4NzE4bG5FVml4T01iWk01bnlzUkxpcVd4ZDV1cjRrOWd3IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlA0azlkR2JyUnZqeDVtNVJJMkh1TGd4cUtYTzNOUHhBZU5qVmZxSzdCWkEiLCJpc3MiOiJodHRwczovL2Rldi04Mzc2MjIub2t0YXByZXZpZXcuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTUzNDIyNTU4OCwiZXhwIjoxNTM0MjI5MTg4LCJjaWQiOiIwb2Fmd21kY3ZwQ1ozZHF0cTBoNyIsInVpZCI6IjAwdWZ3cjdjazdzeEkwQUllMGg3Iiwic2NwIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCJdLCJzdWIiOiJkaW5lc2hiYWRlMTk5MkBnbWFpbC5jb20ifQ.RfNpUsI8a5-K9ZFFanpcoz4rPangzbDYdlK7zu-JwGT7eqIZGmUN0VSrRIHS0Q99341Vsrih35AHLqeYnLhlR3TdvrX2krr93x4nv66Abj7158a22JkE4ys090xDx9isbz4ZyUNSYPcyPRy0Fn0cQrKF90XCdRo8D7ZspkkmXiftI5D5SC4BfsdunuRw5r7qMCnIfQddjDjKCzPZe-zNv7eHk9GOpMemebcCJHSFcl_P-u2dIJt9zlIVk7vzTF9UI2iSeK8qqnHQTLTw9eHqLrCCSFTplpLc_eNj3LaZ7O1uXsR61lfX6g3yWSGTHHzhqwZ7FEq35MNmdBjnIT0Ngw"
        ); */
    
        
        return headers;
    }

    private formatErrors( error: any ) {   
            console.log(error);
         return Observable.throw( error);
        }  
     

    post( path: string, body: Object = {} ): Observable<any> {
        
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');   
             return this.http.post( 
            this.APP_URI+path, 
            JSON.stringify(body), 
            { headers:headers } 
        )
        .catch(error => this.formatErrors(error))
        .map( ( res: Response ) => res );
      
    }

    get(path: string,params: URLSearchParams = new URLSearchParams()): Observable<any> {
        const head= this.setHeaders();
        return this.http.get(this.APP_URI+path, { headers: head})
        .catch(error => this.formatErrors(error))
        .map((res: Response) => res);
      }

      
    
    put(path: string, body: Object = {}): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');   
        return this.http.put(
            this.APP_URI+path,
            JSON.stringify(body),
            { headers: headers }
        )
        .catch(error => this.formatErrors(error))
        .map((res: Response) => res);
     }

    delete(path): Observable<any> {
        return this.http.delete(
            this.APP_URI+path,
          { headers: this.setHeaders() }
        )
        .catch(error => this.formatErrors(error))
        .map((res: Response) => res);
    }
}