import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from "@angular/common/http";
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { SearchSecurityComponent } from './search-security/search-security.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { SecurityViewProfileComponent } from './security-view-profile/security-view-profile.component';
import { EmployeeViewProfileComponent } from './employee-view-profile/employee-view-profile.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"employee",
    component:EmployeeComponent
  },
  {
    path:"addemployee",
    component:AddEmployeeComponent
  },
  {
    path:"viewemployee",
    component:ViewEmployeeComponent
  },
  {
    path:"searchemployee",
    component:SearchEmployeeComponent
  },
  {
    path:"addsecurity",
    component:AddSecurityComponent
  },
  {
    path:"viewsecurity",
    component:ViewSecurityComponent
  },
  {
    path:"searchsecurity",
    component:SearchSecurityComponent
  },
  {
    path:"employeelogin",
    component:EmployeeLoginComponent
  },
  {
    path:"viewprofile",
    component:EmployeeViewProfileComponent
  },
  {
    path:"securitylogin",
    component:SecurityLoginComponent
  },
  {
    path:"viewsecurityprofile",
    component:SecurityViewProfileComponent
  }


]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    SearchSecurityComponent,
    EmployeeLoginComponent,
    SecurityLoginComponent,
    SecurityViewProfileComponent,
    EmployeeViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
