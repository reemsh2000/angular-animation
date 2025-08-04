import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isShrunk = false;

  toggleIsShrunk(): void {
    this.isShrunk = !this.isShrunk;
  }
}
