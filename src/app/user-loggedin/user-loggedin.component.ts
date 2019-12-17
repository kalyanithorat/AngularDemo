import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-loggedin',
  templateUrl: './user-loggedin.component.html',
  styleUrls: ['./user-loggedin.component.scss']
})
export class UserLoggedinComponent implements OnInit {
  user: null;
  token :string=null;
  constructor(private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit() {

    //this.token = localStorage.getItem('auth_token');
    this.route.paramMap.subscribe(params=>{
 
    this.userService.loggedIn().subscribe(res=>{
    console.log(res);
    this.user=res['data']
  
})

})

  }

}
