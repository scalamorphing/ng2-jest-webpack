import {AppComponent} from "./app";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}