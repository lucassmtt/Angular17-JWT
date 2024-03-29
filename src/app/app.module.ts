import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {httpInterceptorProviders} from "./_helpers/http.interceptor";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,

    ],
    providers: [
        httpInterceptorProviders
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}