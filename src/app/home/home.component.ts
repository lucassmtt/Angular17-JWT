import {Component, OnInit} from "@angular/core";
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

    isLogged : boolean = false;

    constructor(private userService : UserService) { }

    ngOnInit(): void {


    }

}
