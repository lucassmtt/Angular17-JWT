import {Inject} from "@angular/core";
import {User} from "../models/user.model";
import {Observable} from "rxjs";

var USER_KEY = 'auth-user';

@Inject({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  clean() {
    window.sessionStorage.clean();
  }

  public saveUser(user: User) : void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() : any {
    const user = window.sessionStorage.getItem(USER_KEY);

    if (user) {
      return JSON.parse(user);
    }

    return null;

  }

  public isLoggedIn() {
    return window.sessionStorage.getItem(USER_KEY) ? true : false;
  }
}
