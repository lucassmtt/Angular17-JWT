import {Component, input, OnInit} from "@angular/core";
import {UserService} from "./_services/user.service";
import {User} from "./models/user.model";



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[] = [];

  idUsernameOrEmail: void;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe((users: User[]) => {
      this.users = users;
    });

  }

  usernameOrEmail: any;
  password: any;
  idPassword: any;

  signIn(usernameOrEmail: String, password: String) {
  }

  forgetPassword() {

  }

  languageChoices: [
    'pt-br',
    'en-US'
  ]

  language: string;

  setLanguage(value: string) {
    this.language = value;
  }
}
