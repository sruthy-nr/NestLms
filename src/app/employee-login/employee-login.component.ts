import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  email=""
  password=""
  searchUser:any=[]

  constructor(private api:ApiService,private route:Router){}
  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    this.api.employeeLogin(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {
          alert("Invalid credentials")
          this.email=""
          this.password=""
        }
         else {
          this.searchUser=response;
          let id=response.empid
          console.log(id)
          localStorage.setItem("empinfo",id)
          this.route.navigate(['/viewprofile'])
        }

      }
      )
    }
}
