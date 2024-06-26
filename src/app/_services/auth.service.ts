import {computed, Injectable} from "@angular/core";
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

    const response = this.http.post(API_URL + '/login', body, { responseType: 'text' });

    response.subscribe({
      next: value => {
        return JSON.parse(value);
      },
      error: value => {
        console.log(value.message)
      }
    })
  }

  register(usernameOrEmail: String, password: String) {

    const validate: Validation = this.validation(usernameOrEmail, password);

    if (validate.flag) {
      return validate;
    } else {
      const body = {
        usernameOrEmail: usernameOrEmail,
        password: password
      }
      return this.http.post(API_URL + '/register', body, { responseType: 'json' });
    }

    if (validate.getValue() == true) {
      const body = {
        usernameOrEmail: usernameOrEmail,
        password: password
      }

      const response = this.http.post(API_URL + '/register', body, { responseType: 'json' });

      response.subscribe({
        next: (response: any) => {
          return JSON.parse(response.data);
        },
        error: (response: any) => {
          console.log(response.mensagem);

        },
      })

    }
  }



  public validation(usernameOrEmail: String, password: String) : Validation {

    var validate = new Validation();

    if (usernameOrEmail.length >= 256) {
      validate.setMsgs('This username or email is very long!');
    } else if (usernameOrEmail.length <= 18) {
      validate.setMsgs('This username or email is too short!');
    } else if (password === undefined) {
      validate.setMsgs('This password is undefined!');
    } else if (password.length >= 256) {
      validate.setMsgs('This password is soo long');
    } else if (password.length <= 12) {
      validate.setMsgs('This password is soo short');
    }

    if (validate.msgs.length >= 1) {
      validate.setValue(false);
    } else {
      validate.setValue(true);
    }
    return validate;
  }
}

class Validation {
  msg: string;
  flag: boolean;
  msgs: string[];

  constructor() {
  }

  setMsgs(msg: string) {
    this.msgs.push(msg);
  }

  setValue(flag: boolean) {
    this.flag = flag;
  }

  getValue(): boolean {
    return this.flag;
  }
}
