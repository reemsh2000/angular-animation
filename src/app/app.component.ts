import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("myButton", { static: true }) myButton!: ElementRef;
  isBlue = false;


  ngAfterViewInit(): void {
    this.listenToTransitionStart();
    this.listenToTransitionEnd();
  }

  ngOnDestroy(): void {
    this.myButton.nativeElement.removeEventListener("transitionstart");
    this.myButton.nativeElement.removeEventListener("transitionend");
  }

  toggleIsBlue(): void {
    this.isBlue = !this.isBlue;
  }

  listenToTransitionStart(): void {
    this.myButton.nativeElement.addEventListener("transitionstart", () => {
      console.log("transition started");
    });
  }

  listenToTransitionEnd(): void {
    this.myButton.nativeElement.addEventListener("transitionend", () => {
      console.log("transition end");
    });
  }
}
