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
        sanitizer.bypassSecurityTrustResourceUrl('../assets/github.svg'));
    iconRegistry.addSvgIcon(
          'linkedin',
          sanitizer.bypassSecurityTrustResourceUrl('../assets/linkedin.svg')
        );
    }
  title = 'Ethan Budd';

  github(): void {
    location.href = 'https://github.com/budde25';
  }

  linkedin(): void {
    location.href = 'https://www.linkedin.com/in/ethan-budd/';
  }
}
