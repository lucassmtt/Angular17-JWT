import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {HttpInterceptorService} from "./_helpers/http.interceptor";
import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing.module";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule {}
