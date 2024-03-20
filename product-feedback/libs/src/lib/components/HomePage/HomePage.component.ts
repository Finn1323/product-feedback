import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './Category.component';
import { RoadmapComponent } from './Roadmap.component';
@Component({
  selector: 'lib-home-page',
  standalone: true,
  imports: [CommonModule, CategoryComponent, RoadmapComponent],
  templateUrl: './HomePage.component.html',
  styleUrl: './HomePage.component.css',
})
export class HomePageComponent {}
