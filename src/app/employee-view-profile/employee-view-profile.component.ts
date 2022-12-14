import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-view-profile',
  templateUrl: './employee-view-profile.component.html',
  styleUrls: ['./employee-view-profile.component.css']
})
export class EmployeeViewProfileComponent {
  id:any=""
  constructor(private api:ApiService){
    this.id=localStorage.getItem("empinfo")
    let data:any={
      "id":this.id
    }
    console.log(data)
    this.api.viewProfile(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.data=response
      }
    )
  }
  data:any=[]
}
