import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-daily-logs',
  templateUrl: './daily-logs.component.html',
  styleUrls: ['./daily-logs.component.css']
})
export class DailyLogsComponent {
  entrydatetime=""
  constructor(private api:ApiService){}
  searchdata:any=[]
  readValues=()=>{
    let data:any={
      "entrydatetime":this.entrydatetime
    }
    console.log(data)
    this.api.dailyLogs(data).subscribe(
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
