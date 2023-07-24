import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  private timer: any = undefined;
  isAdded = false;

  addToCart(): void {
    this.isAdded = true;
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.isAdded = false;
    }, 5000);
  }

  private clearTimer(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  }
}
