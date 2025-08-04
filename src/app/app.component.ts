import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isDisabled = false;

  toggleIsDisabled(): void {
    console.log("setting to true");
    this.isDisabled = true;
    // simulate an API call and reset the isDisabled flag
    setTimeout(() => {
      console.log("false again");
      this.isDisabled = false;
    }, 5000);
  }
}
