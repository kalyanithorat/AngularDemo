import { Injectable } from '@angular/core';
 
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { headersToString } from 'selenium-webdriver/http';




@Injectable({
    providedIn: 'root'
  })

export class UserService{

apiUrl="http://localhost:3000";
constructor(private http:HttpClient){}
   userSignup(data){
   return this.http.post(this.apiUrl +'/register',data);

}
userLogin(data){
     

    return this.http.post(this.apiUrl+ '/login',data);
}
loggedIn(){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization:  localStorage.getItem('auth_token')
   });
   console.log(headers);
   
   return this.http.get(this.apiUrl + '/loggedInUser', { headers });
 }

}