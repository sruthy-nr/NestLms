import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitordailylogs',
  templateUrl: './visitordailylogs.component.html',
  styleUrls: ['./visitordailylogs.component.css']
})
export class VisitordailylogsComponent {
  entrydatetime=""
  constructor(private api:ApiService){}
  searchdata:any=[]
  readValues=()=>{
    let data:any={
      "entrydatetime":this.entrydatetime
    }
    console.log(data)
    this.api.visitorDailyLogs(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
  
          alert("No logs")
          
        } else {
          this.searchdata=response
        }
      }
    )
  }
}
