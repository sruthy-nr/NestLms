import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-view-profile',
  templateUrl: './security-view-profile.component.html',
  styleUrls: ['./security-view-profile.component.css']
})
export class SecurityViewProfileComponent {
  id:any=""
  constructor(private api:ApiService){
    this.id=localStorage.getItem("secinfo")
    let data:any={
      "id":this.id
    }
    console.log(data)
    this.api.viewSecurityProfile(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.data=response
      }
    )
  }
  data:any=[]
}
