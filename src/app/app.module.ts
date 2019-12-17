import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';import {trigger,state,style,animate,transition}from '@angular/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule } from '@angular/router';
 
import { DashboardComponent } from './dashboard/dashboard.component';
import { OutputComponent } from './output/output.component';
//import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailComponent } from './detail/detail.component';
import { UserLoggedinComponent } from './user-loggedin/user-loggedin.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CardComponent,
    DashboardComponent,
    OutputComponent,
    ProfileComponent,
    PagenotfoundComponent,
    DetailComponent,
    UserLoggedinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    RouterModule,
    //Observable 

  ],
  providers: [ 
    
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
