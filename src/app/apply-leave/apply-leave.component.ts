import { Component } from '@angular/core';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  empid=""
  leavetype=""
  remarks=""
  fromdate=""
  todate=""
  applydate=""
  
  readValues=()=>{
    
  }
}
