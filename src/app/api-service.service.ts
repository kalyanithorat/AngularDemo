import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const apiURl = "http://13.233.38.110:5000/api/v1/";
@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  logout() {
    throw new Error("Method not implemented.");
  }
  router: any;

  constructor(private http: HttpClient, router: Router) { }
 login(data) {                                                     //api for login
   return this.http.post(apiURl + 'login', data);
  }

     getLogginedUser() {                                        // api for http header token
     const headers = new HttpHeaders({
     'Content-Type': 'application/json',
     Authorization: 'Token ' + localStorage.getItem('auth_token')
    });
    return this.http.get(apiURl + 'auth/loged-in-user', { headers });
  }
  getCustomers(): Observable<any> {                                   //api for fetching the users data 
    return this.http.get(apiURl + 'all-users');
  }

  deleteToken() {                                                 //api for logout 
 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + localStorage.getItem('auth_token')
    });
    return this.http.get(apiURl + 'auth/logout', { headers })
  }

  getCustomerById(id){                                                 //post data by ID //we send id
    return this.http.post(apiURl +'user-by-id',{id});
  }
}


