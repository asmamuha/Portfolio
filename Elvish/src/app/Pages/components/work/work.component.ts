import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  activeFilter = '*';
  works = [
    {
      imageUrl: 'assets/images/works/1.jpg',
      title: 'UI Elements, Icons',
      description: 'Studio & Art',
      categories: ['Articles', 'Decks']
    },
    {
      imageUrl: 'assets/images/works/2.jpg',
      title: 'Illustrations',
      description: 'Creative & Art',
      categories: ['Projects', 'Articles']
    },
    {
      imageUrl: 'assets/images/works/3.jpg',
      title: 'Media, Icons',
      description: 'Open Imagination',
      categories: ['Decks']
    },
    {
      imageUrl: 'assets/images/works/4.jpg',
      title: 'Graphics, UI Elements',
      description: 'Locked Steel Gate',
      categories: ['Projects', 'Articles']
    },
    {
      imageUrl: 'assets/images/works/5.jpg',
      title: 'Illustrations, Graphics',
      description: 'Mac Sunglasses',
      categories: ['Projects', 'Decks']
    },
    {
      imageUrl: 'assets/images/works/6.jpg',
      title: 'UI Elements, Media',
      description: 'Backpack Contents',
      categories: ['Decks']
    }
  ];

  get filteredWorks() {
    if (this.activeFilter === '*') {
      return this.works;
    } else {
      return this.works.filter(work => work.categories.includes(this.activeFilter));
    }
  }

  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }
}
