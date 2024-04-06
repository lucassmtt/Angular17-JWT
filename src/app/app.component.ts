import {Component, input, OnInit} from "@angular/core";
import {UserService} from "./_services/user.service";
import { Router } from "@angular/router";
import {User} from "./models/user.model";
import {last} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [];

  languageChoices = [
    'pt-br',
    'en-US',
  ]

  language : string;

  isLogged: false;
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

  setLanguage(lang : String) {
    this.language = lang;

    if (this.language === this.languageChoices[0]) {
      console.log('Idioma selecionado: ' + lang)
    } else {
      console.log('Language selected: ' + lang)
    }

  }
}

