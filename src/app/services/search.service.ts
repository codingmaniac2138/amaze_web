import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { User } from "../models/user.model";

import "rxjs/add/operator/map";


@Injectable() 
export class SearchService {
    
    users: Array<User>;
    private searchURL = "http://sbiwas8devv01.caremore.com:8080/amaze/api/v1.0/user_management/search_user";

    constructor(private _httpService: HttpClient) {}

    // function to search in the amaze database
    searchOnAmazeDatabase(body: any): Observable<any> {
        return this._httpService.post(this.searchURL, body).map((responce) => {
            console.log("the value of the responce is: "+ JSON.stringify(responce));
            return responce;
        });
    }

    // function to search in the active directory
    searchOnActiveDirectory(): Observable<User[]> {
        return null;
    }   
}