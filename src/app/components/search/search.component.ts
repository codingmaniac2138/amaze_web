import { Component, OnInit } from "@angular/core";
import { OrderPipe } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})

export class SearchComponent implements OnInit {

    // properties of the SearchComponent
    first_name: string;
    last_name: string;
    employee_id: string;
    role: string;
    buttonText: string;
    searchFlag: boolean;
    showTable: boolean;

    order: string = 'first_name';
    reverse:boolean = false;
    // data to be shown
    users:any[] = [
    {first_name: "abc", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "def", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "ghi", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "jkl", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "mno", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "pqr", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "stu", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "vwx", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "yza", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "bcd", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "efg", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "hij", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "klm", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "nop", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "qrs", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "tuv", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "wxy", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "zab", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "cde", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "fgh", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "ijk", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "lmn", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "opq", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},
    {first_name: "rst", last_name: "def", employee_id: "jsdfg", role: "amaze_user"},

    ];
    sortedUsers: any[];
    p: number = 1;

    constructor(private orderPipe: OrderPipe, private NgxPaginationModule:NgxPaginationModule) {
      this.sortedUsers = orderPipe.transform(this.users, 'first_name')
    }
    //function to sort the column
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

    ngOnInit() {
        this.buttonText = "Search";
        this.searchFlag = true;
    }

    // on the click of the button
    onSubmit() {
        this.buttonText = "Searching..";
        this.searchFlag = false;
        console.log("the value of first_name is:"+this.first_name);
        console.log("the value of last_name is:"+this.last_name);
        console.log("the value of employeeID is:"+this.employee_id);
        console.log("the value of role is:"+this.role);
        this.showTable = true;
    }
}
