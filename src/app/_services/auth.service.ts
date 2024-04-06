import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8081/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public login(usernameOrEmail: String, password: String) : Observable<User> {

    const body = {
      usernameOrEmail: usernameOrEmail,
      password: password
    };

    return this.http.post(API_URL + '/login', body, { responseType: 'json'} )
  }

}
