import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})
export class ViewLeaveComponent {

  constructor(private api:ApiService,private route:Router){}
status=""
leave:any=[]
readValues=()=>{
  let data:any={
    "status":0
  }
  console.log(data)
  this.api.viewLeave(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.length==0) {

        alert("No data")
        this.leave=[]
        
      } else {
        this.leave=response
      }
    }
  )
}

leaveApproved=(id:any)=>{

  let data:any={
    "id":id
  }
  this.api.leaveApproved(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {

        alert("Approved");
        this.route.navigate(['/viewleave'])
      } 
      else {
      
        alert(response.message);
      }
    }
  )

}

leaveRejected=(id:any)=>{

  let data:any={
    "id":id
  }
  this.api.leaveRejected(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {

        alert("Rejected");
        this.route.navigate(['/viewleave'])
      } 
      else {
      
        alert("Error");
      }
    }
  )

}


}
