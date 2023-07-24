import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("box", { static: true }) box!: ElementRef;

  onClick(args: any): void {
    if (!(this.box && this.box.nativeElement)) {
      return;
    }
    this.box.nativeElement.style.transform = `
      translateX(${args.clientX - 100}px) translateY(${args.clientY - 100}px)
    `;
  }
}
