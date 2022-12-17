import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addemployee",dataToSend)
  }
  viewEmployee=()=>{
    return this.http.get("http://localhost:8080/viewemployee")
  }
  searchEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/searchemployee",dataToSend)
  }
  deleteEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/deleteemployee",dataToSend)
  }
  addSecurity=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",dataToSend)
  }
  viewSecurity=()=>{
    return this.http.get("http://localhost:8080/viewsecurity")
  }
  searchSecurity=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/searchsecurity",dataToSend)
  }
  deleteSecurity=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/deletesecurity",dataToSend)
  }
  employeeLogin=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/employeelogin",dataToSend)
  }
  viewProfile=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/viewprofile",dataToSend)
  }
  securityLogin=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/securitylogin",dataToSend)
  }
  viewSecurityProfile=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/viewsecurityprofile",dataToSend)
  }
  applyLeave=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/applyleave",dataToSend)
  }
  viewLeave=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/viewleave",dataToSend)
  }
  leaveApproved=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/leaveapproved",dataToSend)
  }
  leaveRejected=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/leaverejected",dataToSend)
  }
  entryLog=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/entry",dataToSend)
  }
  viewExitList=()=>{
    return this.http.get("http://localhost:8080/viewexitlist")
  }
  exitLog=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/exit",dataToSend)
  }
  dailyLogs=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/dailylogs",dataToSend)
  }
  datewiseLogs=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/datewiselogs",dataToSend)
  }
  visitorEntry=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/visitorentry",dataToSend)
  }
  viewVisitor=()=>{
    return this.http.get("http://localhost:8080/viewvisitor")
  }
  visitorExit=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/visitorexit",dataToSend)
  }
  visitorDailyLogs=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/visitordailylogs",dataToSend)
  }

}
