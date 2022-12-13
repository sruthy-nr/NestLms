import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  constructor(private api:ApiService,private route:Router){}
empcode=""
searchdata:any=[]
readValues=()=>{
  let data:any={
    "empcode":this.empcode
  }
  console.log(data)
  this.api.searchEmployee(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.length==0) {

        alert("invalid employee code")
        
      } else {
        this.searchdata=response
      }
    }
  )
}
deletebuttonclick=(id:any)=>{

  let data:any={
    "id":id
  }
  this.api.deleteEmployee(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {

        alert("Deleted");
        this.route.navigate(['/viewemployee'])
      } 
      else {
      
        alert("invalid input");
      }
    }
  )

}

}
