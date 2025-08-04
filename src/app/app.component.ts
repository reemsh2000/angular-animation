import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  tabs = ["home", "about", "contact"];
  tabSelected = "home";

  selectTab(tab: string): void {
    this.tabSelected = tab;
  }
}
