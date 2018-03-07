import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatSort, MatTableDataSource, MatSortable } from "@angular/material";
// import { User } from "../../models/user.model";
import { DummyData } from "./dummy.data";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})

// Table Component test that would populate the data, sort the first_name only and apply pagination too.
export class TableComponent implements OnInit {
  
  // @ViewChild(MatSort) sort: MatSort;
  
  // data source from which we have to get the data 
  dataSource: any;

  // columns to be displayed on the table
  displayedColumns = ["first_name", "last_name", "employee_id", "role"];
  
  constructor() {

  }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource(DummyData);
    // this.dataSource.sort = this.sort;
  }

  // Handling the on click event on the row
  onRowClicked(row) {
    console.log("the row is: "+ JSON.stringify(row));
  }
  
}




// // list of rows which should be displayed
// public rows: Array<any> = [];
  
// // the columns which contain the config part like title of the columns and sort action true or false.
// public columns: Array<any> = [
//   {title: "FirstName", name: "first_name"},
//   {title: "LastName", name: "last_name", sort: false},
//   {title: "EmployeeID", name: "employee_id", sort: false},
//   {title: "Role", name: "role", sort: false}
// ];

// // the default page after the component page loading
// public page: number = 1;

// // number of items available on the page
// public itemsPerPage: number = 10;

// // number in the pagination list after which ... will appear
// public maxSize: number = 4;

// // the number of pages that are there in the view right now only 1 for testing
// public numPages: number = 1;

// // the total number of items after filtering (not required by current version may be in the next version).
// public length: number = 0;

// // the config object that defines the configuration about the table sorting, filtering and pagination
// public config = {
//   paging: true,
//   sorting: { columns: this.columns },
// };

// // the data source that we add show on the table after querying the backend REST service.Right now testing with dummy data
// public dataSource: Array<any> = DummyData;

// // 
// constructor() {
//   this.length = this.dataSource.length;
// }

// ngOnInit() {
// }

// public onChangeTable(config:any) {
//   // const page: any = {page: this.page, itemsPerPage: this.itemsPerPage};
  
//   // if (config.sorting) {
//   //   Object.assign(this.config.sorting, config.sorting);
//   // }
//   console.log("Inside the onTableChange function");

// }
