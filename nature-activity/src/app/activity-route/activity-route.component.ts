import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../services/activities.service';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-activity-route',
  templateUrl: './activity-route.component.html',
  styleUrls: ['./activity-route.component.css']
})
export class ActivityRouteComponent implements OnInit {

  activityroute: Activity[];
  constructor(private activityService: ActivitiesService) { }

  ngOnInit() {
    this.activityService.getActivities().subscribe(activityroute => {
      console.log(activityroute);
      this.activityroute = activityroute;
    });
  }

}
