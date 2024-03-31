import {Component, OnInit} from "@angular/core";
import {UserService} from "./_services/user.service";
import { Router } from "@angular/router";
import {User} from "./entities";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [];

  response: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      (data: any) => {
        data.forEach((item: any) => {
          this.users.push(this.jsonToUser(item));
        });
      },
      (error) => {
        console.log('Error ' + error);
      }
    )
  }

  jsonToUser(json: any): User {
    return new User(json.userName, json.email, json.name);
  }

}
