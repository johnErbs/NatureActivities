import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './header.component';
import { CreateActivityRouteComponent } from './create-activity-route/create-activity-route.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routing } from './app.routing';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ActivityRouteComponent } from './activity-route/activity-route.component';
import { ActivitiesService } from './services/activities.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateActivityRouteComponent,
    HomePageComponent,
    ActivityRouteComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'nature-activity'),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnAO_DHcWFq8wojfaYInvNvuvDhV_A-Tw'
    })
  ],
  providers: [ActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
