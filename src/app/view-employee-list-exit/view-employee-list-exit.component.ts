import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-list-exit',
  templateUrl: './view-employee-list-exit.component.html',
  styleUrls: ['./view-employee-list-exit.component.css']
})
export class ViewEmployeeListExitComponent {
  exitdatetime=""

  constructor(private api:ApiService,private route:Router){
    api.viewExitList().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
    data:any=[]

    exit=(id:any)=>{

      let data:any={
        "id":id,
        "exitdatetime":this.exitdatetime
      }
      this.api.exitLog(data).subscribe(
        (response:any)=>{
          console.log(response)
          if (response.status=="success") {
    
            alert("Exited");
            this.route.navigate(['/viewexitlist'])
          } 
          else {
          
            alert(response.message);
          }
        }
      )
    
    }
}
