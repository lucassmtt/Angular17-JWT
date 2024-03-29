import {Component, OnInit} from "@angular/core";
import { UserService } from "../../_services/user.service";
import {Observable} from "rxjs";


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

    content?: Observable<any>;

    constructor(private userService : UserService) { }

    ngOnInit(): void {
        this.content = this.userService.getAll();
    }

}