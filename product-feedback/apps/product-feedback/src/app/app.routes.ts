import { Route } from '@angular/router';
import { HomePageComponent } from './pages/HomePage/HomePage.component';
import { NewFeedbackPageComponent } from './pages/NewFeedbackPage/NewFeedbackPage.component';
import { RoadmapPageComponent } from './pages/RoadmapPage/RoadmapPage.component';
export const appRoutes: Route[] = [
  { path: '', component: HomePageComponent },
  { path: 'new-feedback', component: NewFeedbackPageComponent },
  { path: 'roadmap', component: RoadmapPageComponent },
];
