import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('navbar') navbar!: ElementRef;

  activeSection: string = 'home'; // Default section
  navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'visuals', label: 'Visuals', href: '#visuals' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}
 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.pageYOffset > 100) {
        // Adjust the scroll position threshold as needed
        this.renderer.addClass(this.navbar.nativeElement, 'stickyadd');
      } else {
        this.renderer.removeClass(this.navbar.nativeElement, 'stickyadd');
      }
      this.updateActiveSectionOnScroll();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize the navbar state
      this.onWindowScroll();
      this.updateActiveSectionOnScroll();
    }
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  private updateActiveSectionOnScroll() {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= 100 && sectionTop >= -100) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    if (currentSectionId) {
      this.activeSection = currentSectionId;
    }
  }
}
