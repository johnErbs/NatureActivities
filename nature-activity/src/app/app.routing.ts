import { Routes, RouterModule } from '@angular/router';
import { CreateActivityRouteComponent } from './create-activity-route/create-activity-route.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ActivityRouteComponent } from './activity-route/activity-route.component';

// Array of route_Objects.
const APP_Routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'newRoute', component: CreateActivityRouteComponent },
    { path: 'routes', component: ActivityRouteComponent }
];

export const routing = RouterModule.forRoot(APP_Routes);
