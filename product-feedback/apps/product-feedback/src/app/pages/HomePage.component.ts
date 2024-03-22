import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '@components/category/Category.component';
import { RoadmapComponent } from '@components/roadmap/Roadmap.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CategoryComponent, RoadmapComponent],
  templateUrl: './HomePage.component.html',
  styleUrl: './HomePage.component.css',
})
export class HomePageComponent {}
