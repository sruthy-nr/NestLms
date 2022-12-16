import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  empid=localStorage.getItem("empinfo")
  leavetype=""
  remarks=""
  fromdate=""
  todate=""
  applydate=""
  
  constructor(private api:ApiService ,private route:Router){}
  readValues=()=>{
    let data:any={
      "empid":this.empid,
      "leavetype":this.leavetype,
      "remarks":this.remarks,
      "fromdate":this.fromdate,
      "todate":this.todate,
      "applydate":this.applydate
    }
    console.log(data)
    if(this.leavetype != "" && this.fromdate != "" && this.todate != "" && this.applydate != ""){
    this.api.applyLeave(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Applied Successfully")
          this.leavetype=""
          this.remarks=""
          this.fromdate=""
          this.todate=""
          this.applydate=""
          this.route.navigate(['/viewprofile'])
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
