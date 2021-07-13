import { Component, Injector } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content!: SafeHtml;
  constructor(domSanitizer: DomSanitizer, injector: Injector) {
    const AlertElement = createCustomElement(AlertComponent, {injector: injector});
    customElements.define('my-alert', AlertElement)
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml("<my-alert message='Dynamically rendered'></my-alert>");
    },1000)
  }
}
