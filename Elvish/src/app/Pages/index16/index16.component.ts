import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index16',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index16.component.html',
  styleUrl: './index16.component.css'
})
export class Index16Component implements AfterViewInit {

  slides = [
    { title: 'Asma Muhammad', subtitle: 'Hello & Welcome', image: 'assets/images/hometcmv.jpg' },
    { title: 'An Activist', subtitle: 'Hello & Welcome', image: 'assets/images/hometcmv.jpg' },
    { title: 'A Developer', subtitle: 'Hello & Welcome', image: 'assets/images/hometcmv.jpg' }
  ];



  ngAfterViewInit(): void {
    // Access slickModal here after view initialization
    // console.log(this.slickModal);
  }
}
