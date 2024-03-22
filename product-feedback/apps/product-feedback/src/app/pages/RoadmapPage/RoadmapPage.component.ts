import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapListComponent } from '@components/roadmap-list/RoadmapList.component';
@Component({
  selector: 'app-roadmap-page',
  standalone: true,
  imports: [CommonModule, RoadmapListComponent],
  templateUrl: './RoadmapPage.component.html',
  styleUrl: './RoadmapPage.component.css',
})
export class RoadmapPageComponent {}
