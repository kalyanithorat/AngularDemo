import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiServiceService } from '../api-service.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() signupClick = new EventEmitter();

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  isSuccess = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
   // localStorage.setItem("auth_token", null);

  }



  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

  }

  get f() {
    return this.loginForm.controls;
  }
  login() {
    console.log(this.loginForm);

    let postData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.userService.userLogin(postData).subscribe(res => {
      console.log("res", res);
      if (res['status']=="success" && res['token'].length>0) {
        console.log('success');
        
        localStorage.setItem("auth_token",res['token'])
         


        this.router.navigate(['/dashboard']);
      }
      else {
        console.log('Invalid Username/password');
       
      }

    });
    this.loginForm.reset();
  }

  signup() {

    this.signupClick.emit();
  }

}
