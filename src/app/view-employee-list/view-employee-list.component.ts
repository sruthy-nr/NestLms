import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-list',
  templateUrl: './view-employee-list.component.html',
  styleUrls: ['./view-employee-list.component.css']
})
export class ViewEmployeeListComponent {
  entrydatetime=""
    exitdatetime=""

  constructor(private api:ApiService,private route:Router){
    api.viewEmployee().subscribe(
      (response)=>{
        this.employee=response
      }
    )
  }
    employee:any=[]

    
    entry=(id:any)=>{

      let data:any={
        "empcode":id,
        "entrydatetime":this.entrydatetime,
        "exitdatetime":this.exitdatetime
      }
      this.api.entryLog(data).subscribe(
        (response:any)=>{
          console.log(response)
          if (response.status=="success") {
    
            alert("Entered");
            this.entrydatetime=""
            this.exitdatetime=""
            this.route.navigate(['/viewemployeelist'])
          } 
          else {
          
            alert("Not entered");
          }
        }
      )
    
    }

    
}
