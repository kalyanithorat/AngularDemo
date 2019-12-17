import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { UserLoggedinComponent } from './user-loggedin/user-loggedin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path:'details/:id',component:DetailComponent},
  { path: 'page-not-found', component: PagenotfoundComponent},
  {path:'profile', component:ProfileComponent},
  {path:'user',component:UserLoggedinComponent},
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
