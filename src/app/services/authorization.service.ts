/**
 * Authorization service that will be able to handle 
 * 1. Login to handle POST request, parse the payload and storing into the localStorage   
 * 2. Logout functionality
 * 3. Refresh Token functionality
 */

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// <<<<<<< HEAD
// import * as jsonWebToken from "jsonwebtoken";
// =======
// >>>>>>> user-management
import { Observable } from "rxjs/Observable";
// import * as moment from "moment";
// import * as _ from "lodash";

import { ROLES } from "../models/roles.enum";
import { MODULES } from "../models/modules.enum";
import { User } from "../models/user.model";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

import * as jsonWebToken from "jsonwebtoken";
import * as _ from "lodash";
import * as moment from "moment";

@Injectable()
export class AuthorizationService {

    loginURL: string = "http://sbiwas8devv01.caremore.com:8080/amaze/api/v1.0/auth/login/";

    constructor(private _httpService: HttpClient) {}

    // handling the login of user and we will allow only the admin
    public login(careMoreID: string, password: string) {
        // body with the post request
        const body = {
            "username": careMoreID,
            "password": password
        };

        return this._httpService.post(this.loginURL, body).do((res) => this.handleSession(res));
    }

    // function for the logout
    public logout() {

    }

    // handle the session information like handling the session info
    private handleSession(res) {
        if(!res) {
            // if the value of the token did not came and the user is not the admin
            // console.log("the value of token did not came");
            throw Observable.throw("user is not valid");
        }
        else {
            // parsing the data token and storing it into the local storage
            const payload = jsonWebToken.decode(res.access_token);
            const expirationTime = payload.exp * 1000;
            // console.log("the value of the expiration time is " + moment(expirationTime).format("LLLL"));
            const issuedTime = payload.iat * 1000;
            // console.log("the value of the issuence time is: " + moment(issuedTime).format("LLLL"));
            console.dir(payload);
            if(this.parsePayload(payload)) {
                // the user has admin rights then we have to store the expiration date into the local storage
                localStorage.setItem("access_token", res.access_token);
                // setting the expriation time of the access token to the expriation time 1 hour ahead of the issued time
                localStorage.setItem("exp_access_time", expirationTime.toString());
                // adding the refresh token into the local storage
                localStorage.setItem("refresh_token", res.refresh_token);
                // setting the local storage with 45 days ahead
                localStorage.setItem("exp_refresh_token", moment(expirationTime).add(45, "days").valueOf().toString());
            }
            else {
                // the user does not have admin access
                return Observable.throw("user does not have access");
            }
        }
        
    }
    
    // function to parse the payload for now I am providing logic of getting the ADMIN access to the 
    // USER_MANAGEMENT module. have to make this logic more sound
    private parsePayload(payload) {
        let roles = [];
        _.forEach(payload.user.authorities, (amaze_module) => {
            switch(amaze_module.module.name) {
                case MODULES.USER_MANAGEMENT:
                    roles = _.filter(amaze_module.module.roles, (role) => {
                        return role.name === ROLES.ADMIN;
                    });
                default:
                    return []; 
            }
        });
        // console.log("the value roles is: "+ JSON.stringify(roles));
        if(roles[0].name === ROLES.ADMIN) {
            return true;
        }
        else  {
            return false;
        }
    }

    // function to check whether the user is logged in or not
    public isLoggedIn() {

    }

    // function to handle and get a new access token from refresh token
    private getNewAccessToken() {

    }

}