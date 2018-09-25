import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private elementRef : ElementRef){

  }
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "assets/js/script.js";
    this.elementRef.nativeElement.appendChild(s);
    var s3 = document.createElement("script");
    s3.type = "text/javascript";
    s3.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    this.elementRef.nativeElement.appendChild(s3);
    var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.src = "assets/js/mailchimp.js";
    this.elementRef.nativeElement.appendChild(s1);
  }
}
