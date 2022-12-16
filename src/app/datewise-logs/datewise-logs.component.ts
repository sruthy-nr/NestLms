import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-datewise-logs',
  templateUrl: './datewise-logs.component.html',
  styleUrls: ['./datewise-logs.component.css']
})
export class DatewiseLogsComponent {
  entrydatetime=""
  exitdatetime=""
  constructor(private api:ApiService){}
  searchdata:any=[]
  readValues=()=>{
    let data:any={
      "entrydatetime":this.entrydatetime,
      "exitdatetime":this.exitdatetime
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
