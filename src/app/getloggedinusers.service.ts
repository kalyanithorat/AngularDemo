import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
//import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { share, map } from 'rxjs/operators';

const apiURl="http://13.233.38.110:5000/api/v1/";

@Injectable({
  providedIn: 'root'
})
export class GetloggedinusersService {
  appStorage: any;

  constructor(private http:HttpClient) { }
  
     
   
     
    
getLoggedUser(){ 
  // const headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   Authorization: 'Token ' + this.appStorage.get('auth_token')
  // });
  return this.http.get(apiURl +'auth/loged-in-user',{});
  
}
}

    
  

