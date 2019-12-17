import { Component, OnInit, Output,Input } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder,FormArray}  from '@angular/forms';
//import { stringify } from '@angular/core/src/render3/util';
//import { variable } from '@angular/compiler/src/output/output_ast';
import { trigger,state, group, style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { EventEmitter } from 'events';
import { ApiServiceService } from '../api-service.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
@Input() childExample:string;
@Output() exampleOutput=new EventEmitter();
public show:boolean=false;
public buttonName:any='show';
  registerForm: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],         
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
         
      });
      this.registerForm.hasError
      localStorage.setItem("auth_token",null);
  }
   
 

  toggle() {
    this.show=!this.show;
    if(this.show)
    return this.registerForm;
    else{
      this.buttonName="show";
    }
       
}
get f(){
  return this.registerForm.controls;
  
}
signup(){
let postData={
  email:this.registerForm.value.email,
  password:this.registerForm.value.password
}
this.userService.userSignup(postData).subscribe(res=>{
console.log("res",res);
if(res['isSuccess'])
console.log('success');
localStorage.setItem("auth_token",res['data']);
this.router.navigate(['/login']);
})

}

onSubmit(){
  this.submitted=true;
  if(this.registerForm.valid){
    return;
  }
}


register(form){
console.log(form.value);
this.registerForm.reset();
   
  
   }
  
}