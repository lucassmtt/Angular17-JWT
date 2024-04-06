import {Component, input, OnInit} from "@angular/core";
import {UserService} from "./_services/user.service";
import { Router } from "@angular/router";
import {User} from "./models/user.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [];

  language = 'pt-br'

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
  idSenha: any;
  idPassword: any;
}

