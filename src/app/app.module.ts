import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
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
import { EmployeeNavComponent } from './employee-nav/employee-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { SecurityNavComponent } from './security-nav/security-nav.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { ViewEmployeeListComponent } from './view-employee-list/view-employee-list.component';
import { ViewEmployeeListExitComponent } from './view-employee-list-exit/view-employee-list-exit.component';
import { DailyLogsComponent } from './daily-logs/daily-logs.component';
import { DatewiseLogsComponent } from './datewise-logs/datewise-logs.component';
import { VisitorEntryComponent } from './visitor-entry/visitor-entry.component';
import { ViewVisitorComponent } from './view-visitor/view-visitor.component';
import { VisitordailylogsComponent } from './visitordailylogs/visitordailylogs.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent
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
  },
  {
    path:"applyleave",
    component:ApplyLeaveComponent
  },
  {
    path:"viewleave",
    component:ViewLeaveComponent
  },
  {
    path:"viewemployeelist",
    component:ViewEmployeeListComponent
  },
  {
    path:"viewexitlist",
    component:ViewEmployeeListExitComponent
  },
  {
    path:"dailylogs",
    component:DailyLogsComponent
  },
  {
    path:"datewiselogs",
    component:DatewiseLogsComponent
  },
  {
    path:"visitorentry",
    component:VisitorEntryComponent
  },
  {
    path:"viewvisitor",
    component:ViewVisitorComponent
  },
  {
    path:"visitordailylogs",
    component:VisitordailylogsComponent
  }


]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    SearchSecurityComponent,
    EmployeeLoginComponent,
    SecurityLoginComponent,
    SecurityViewProfileComponent,
    EmployeeViewProfileComponent,
    EmployeeNavComponent,
    MainNavComponent,
    ApplyLeaveComponent,
    AdminManageComponent,
    SecurityNavComponent,
    ViewLeaveComponent,
    ViewEmployeeListComponent,
    ViewEmployeeListExitComponent,
    DailyLogsComponent,
    DatewiseLogsComponent,
    VisitorEntryComponent,
    ViewVisitorComponent,
    VisitordailylogsComponent,
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
