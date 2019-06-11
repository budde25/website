import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'github',
        sanitizer.bypassSecurityTrustResourceUrl('assets/menubar/github.svg'));
    iconRegistry.addSvgIcon(
        'linkedin',
        sanitizer.bypassSecurityTrustResourceUrl('assets/menubar/linkedin.svg'));
    iconRegistry.addSvgIcon(
        'java',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/java.svg'));
    iconRegistry.addSvgIcon(
        'github-b',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-brands.svg'));
    iconRegistry.addSvgIcon(
        'ts',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ts.svg'));
    iconRegistry.addSvgIcon(
        'js',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/js.svg'));
    iconRegistry.addSvgIcon(
        'html',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/html5.svg'));
    iconRegistry.addSvgIcon(
        'android',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/android.svg'));
    iconRegistry.addSvgIcon(
        'angular',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/angularjs-plain.svg'));
    }
  title = 'Ethan Budd';

  github(): void {
    location.href = 'https://github.com/budde25';
  }

  linkedin(): void {
    location.href = 'https://www.linkedin.com/in/ethan-budd/';
  }
}
