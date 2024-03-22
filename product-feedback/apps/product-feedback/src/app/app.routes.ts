import { Route } from '@angular/router';
import { HomePageComponent } from './pages/HomePage.component';
import { NewFeedbackPageComponent } from './pages/NewFeedbackPage.component';
export const appRoutes: Route[] = [
  { path: '', component: HomePageComponent },
  { path: 'new-feedback', component: NewFeedbackPageComponent },
];
