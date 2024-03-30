import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {httpInterceptorProviders} from "./_helpers/http.interceptor";
import {HomeComponent} from "./api/home/home.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
    providers: [
        httpInterceptorProviders
    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule {}
