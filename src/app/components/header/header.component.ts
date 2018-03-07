import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})

export class HeaderComponent implements OnInit {

    @Input() area: string;
    @Input() workspace: string;
    @Input() username: string;
    constructor() {
    }

    ngOnInit() {
        this.area = "Coding Review";
        this.workspace = "My Tasks";
        this.username = "Sabreen Ayad";
    }
}
