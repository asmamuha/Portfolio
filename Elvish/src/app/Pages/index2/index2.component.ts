import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-index2',
  standalone: true,
  imports: [],
  templateUrl: './index2.component.html',
  styleUrl: './index2.component.css'
})
export class Index2Component implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['Asma Muhammad.', 'An Activist.', 'A Founder.'],
        typeSpeed: 40,
        backSpeed: 40,
        showCursor: true,
        cursorChar: '',
        loop: true, // Enable looping

      };

      const typed = new Typed('.typed-element', options);
    }
  }
}
