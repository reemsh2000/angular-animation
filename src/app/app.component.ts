import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  toastIsVisible = false;
  private timer: any = undefined;

  dismissToast(): void {
    this.toastIsVisible = false;
    this.clearTimer();
  }

  showToast(): void {
    this.toastIsVisible = true;
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.dismissToast();
    }, 5000);
  }

  private clearTimer(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  }
}
