import {Component, OnInit} from "@angular/core";
import {UserService} from "./_services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  private service: UserService;

  constructor(private userService: UserService, private router: Router) {
    this.service = userService;
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
      console.log(data);
    })
  }
}
