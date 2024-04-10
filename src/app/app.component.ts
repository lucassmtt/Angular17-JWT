import {Component, input, OnInit} from "@angular/core";
import {UserService} from "./_services/user.service";
import {User} from "./models/user.model";
import {StorageService} from "./_services/storage.service";
import {AuthService} from "./_services/auth.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[] = [];
  isLoggedIn = false;
  idUsernameOrEmail: void;

  constructor(private userService: UserService, private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  usernameOrEmail: any;
  password: any;
  idPassword: any;

  signIn(usernameOrEmail: String, password: String) {
    this.authService.login(usernameOrEmail, password);
  }

  forgetPassword() {

  }

  languageChoices: [
    'pt-br',
    'en-US'
  ]

  public language: string;

  setLanguage(value: string) {
    this.language = value;
  }
}
