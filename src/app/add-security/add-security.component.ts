import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {
  seccode=""
  name=""
  designation=""
  salary=""
  phone=""
  email=""
  password=""
  
  constructor(private api:ApiService ,private route:Router){}
  readValues=()=>{
    let data:any={
      "seccode":this.seccode,
      "name":this.name,
      "phone":this.phone,
      "email":this.email,
      "password":this.password

    }
    console.log(data)
    if(this.password != "" && this.email != ""){
    this.api.addSecurity(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Added Successfully")
          this.seccode=""
          this.name=""
          this.phone=""
          this.email=""
          this.password=""
          this.route.navigate(['/viewsecurity'])
        } 
        else {
          alert("Something went wrong")
        }
      }
    )
  }
  else{
    alert("Empty fields")
  
  }
}
}
