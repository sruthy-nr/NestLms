import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-security',
  templateUrl: './search-security.component.html',
  styleUrls: ['./search-security.component.css']
})
export class SearchSecurityComponent {
  
  constructor(private api:ApiService,private route:Router){}
  seccode=""
  searchdata:any=[]
  readValues=()=>{
    let data:any={
      "seccode":this.seccode
    }
    console.log(data)
    this.api.searchSecurity(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
  
          alert("invalid security code")
          
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
    this.api.deleteSecurity(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
  
          alert("Deleted");
          this.route.navigate(['/viewsecurity'])
        } 
        else {
        
          alert("invalid input");
        }
      }
    )
  
  }
  
}
