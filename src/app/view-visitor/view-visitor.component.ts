import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-visitor',
  templateUrl: './view-visitor.component.html',
  styleUrls: ['./view-visitor.component.css']
})
export class ViewVisitorComponent {
  constructor(private api:ApiService, private route:Router){
    api.viewVisitor().subscribe(
      (response)=>{
        this.visitor=response
      }
    )
  }
    visitor:any=[]

    exitdatetime=""
    exit=(id:any)=>{
      let data:any={
        "id":id,
        "exitdatetime":this.exitdatetime
      }
      this.api.visitorExit(data).subscribe(
        (response:any)=>{
          console.log(response)
          if (response.status=="success") {
    
            alert("Exited");
            this.route.navigate(['/viewvisitor'])
          } 
          else {
          
            alert("error");
          }
        }
      )

    }
}
