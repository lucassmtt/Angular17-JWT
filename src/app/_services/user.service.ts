import {Component, Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {User} from "../models/user.model";

const API_URL = 'http://localhost:8081/user'

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {
    }

    public getAll() : Observable<User[]> {
      return this.http.get<User[]>(API_URL);
    }

    public getByOid(oid: String) : Observable<any> {
        return this.http.get(API_URL + oid, { responseType: 'text' });
    }

    public getByEmail(email: String) : Observable<any> {
        return this.http.get(API_URL + email, { responseType: 'text' });
    }

    public getByUsername(username: String) : Observable<any> {
        return this.http.get(API_URL + username, { responseType: 'text'} )
    }


}
