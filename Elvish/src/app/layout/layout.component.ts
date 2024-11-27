import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from '../Pages/components/about/about.component';
import { EducationComponent } from '../Pages/components/education/education.component';
import { WorkComponent } from '../Pages/components/work/work.component';
import { ClientComponent } from '../Pages/components/client/client.component';
import { ContactUsComponent } from '../Pages/components/contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    AboutComponent,
    EducationComponent,
    WorkComponent,
    ClientComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
