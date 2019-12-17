import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../api-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { longStackSupport } from 'q';
import { UserService } from '../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users = [];
  // user:{
  //   id:number,
  //   name:string
  // };

  token: string;
  apiService: any;
  constructor(
    private apiServiceService: ApiServiceService,
    private userService:UserService, 
    private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.token = localStorage.getItem('auth_token');
    
    
    if(this.token!== 'null'){

      this.userService.loggedIn().subscribe(responce => {
        console.log('Login User', responce);
      });
      
      this.apiServiceService.getCustomers().subscribe(res =>                //subscribe atkt users data
        {
          this.users = res.data;
          console.log(this.users);
          
        })
      }
       else{
        console.log(
        this.token
      );
      
        localStorage.clear();
        this.router.navigate(['/'])
        
      }

   
  }  



  logout() {
    this.apiServiceService.deleteToken().subscribe(res => {
      console.log("Logout Responce", res);
      
        console.log('success');
        localStorage.clear();
        this.router.navigate(['/']);
      
    });
  }
//   getData()
// {
//   this.user={
//   id:this.route.snapshot.params['id'],
//   name:this.route.snapshot.params['name']
//   };
}


