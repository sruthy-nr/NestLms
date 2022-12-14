import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {

  email=""
  password=""
  searchUser:any=[]

  constructor(private api:ApiService,private route:Router){}
  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    this.api.securityLogin(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {
          alert("Invalid credentials")
          this.email=""
          this.password=""
        }
         else {
          this.searchUser=response;
          let id=response.secid
          console.log(id)
          localStorage.setItem("secinfo",id)
          this.route.navigate(['/viewsecurityprofile'])
        }

      }
      )
    }
}
