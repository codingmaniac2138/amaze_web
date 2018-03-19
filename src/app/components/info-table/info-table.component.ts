import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})


export class InfoTableComponent implements OnInit {
  @Input() character: any;
  @Input() columns: string[];
  constructor() { }

  ngOnInit() {
    this.character = [{ "Care Provider": "Aziz Douglas", "Date of Service": "12/02/2017", "Review Status": true },
    { "Care Provider": "Aziz Douglas", "Date of Service": "18/02/2017", "Review Status": true },
    { "Care Provider": "Mark Edward", "Date of Service": "02/03/2017", "Review Status": true },
    { "Care Provider": "Aziz Douglas", "Date of Service": "15/03/2017", "Review Status": true },
    { "Care Provider": "Mark Edward", "Date of Service": "05/04/2017", "Review Status": true }]

    this.columns = ["Care Provider", "Date of Service", "Review Status"]
  }

}


// export const dummy_data: any[]=

//   [{ "Care Provider": "Aziz Douglas", "Date of Service": "12/02/2017", "Review Status": true },
//   { "Care Provider": "Aziz Douglas", "Date of Service": "18/02/2017", "Review Status": true },
//   { "Care Provider": "Mark Edward", "Date of Service": "02/03/2017", "Review Status": true },
//   { "Care Provider": "Aziz Douglas", "Date of Service": "15/03/2017", "Review Status": true },
//   { "Care Provider": "Mark Edward", "Date of Service": "05/04/2017", "Review Status": true }]
