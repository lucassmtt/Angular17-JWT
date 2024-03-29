import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.ts',
    standalone: false,
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    private roles : string[] = [];
}