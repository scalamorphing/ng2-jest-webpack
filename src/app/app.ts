import {Component, Input} from "@angular/core";

@Component({
  selector: "app",
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent {
  @Input() name = "Angular";
}

