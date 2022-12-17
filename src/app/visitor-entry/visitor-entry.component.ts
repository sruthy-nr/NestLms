import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitor-entry',
  templateUrl: './visitor-entry.component.html',
  styleUrls: ['./visitor-entry.component.css']
})
export class VisitorEntryComponent {

  name=""
  purpose=""
  whomtomeet=""
  entrydatetime=""

  constructor(private api:ApiService, private route:Router){}
  readValues=()=>{
    let data:any={
      "name":this.name,
      "purpose":this.purpose,
      "whomtomeet":this.whomtomeet,
      "entrydatetime":this.entrydatetime
    }
    this.api.visitorEntry(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Added Successfully")
          this.name=""
          this.purpose=""
          this.whomtomeet=""
          this.entrydatetime=""
          this.route.navigate(['/viewsecurityprofile'])
        } 
        else {
          alert("Something went wrong")
        }
      }
    )
  }
}
