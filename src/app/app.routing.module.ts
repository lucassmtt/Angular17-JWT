import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./api/home/home.component";
import {NgModule} from "@angular/core";

const routes : Routes = [
    { path: 'home', component: HomeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }