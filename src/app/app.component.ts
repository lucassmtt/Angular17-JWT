import {Component, input, OnInit} from "@angular/core";
import {UserService} from "./_services/user.service";
import { Router } from "@angular/router";
import {User} from "./models/user.model";
import {last} from "rxjs";
import {requiresLinking} from "@angular-devkit/build-angular/src/tools/babel/presets/application";



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

  protected readonly input = input;
  usernameOrEmail: any;
  password: any;
  idPassword: any;

  signIn(usernameOrEmail: String, password: String) {
  }

  forgetPassword() {

  }

  protected readonly last = last;
  languageChoices: [
    'pt-br',
    'en-US'
  ]

  language: string;

  setLanguage(lang : string) {
    this.language = lang;
  }

}
