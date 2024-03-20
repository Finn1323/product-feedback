import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Category.component.html',
  styleUrl: './Category.component.css',
})
export class CategoryComponent {
  categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  activeCategoryIndex = 0; // Set the default active category index
  constructor() {
    console.log(this.categories);
  }

  setActiveCategory(index: number) {
    this.activeCategoryIndex = index;
  }
}
