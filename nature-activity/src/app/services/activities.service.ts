import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActivitiesService {

  activitiesCollection: AngularFirestoreCollection<Activity>;
  activityroute: Observable<Activity[]>;

  constructor(db: AngularFirestore) {
    this.activityroute = db.collection('activityroute').valueChanges();

    /*
    this.activityroute = db.collection('activityroute').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Activity;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    */
  }

  getActivities() {
    return this.activityroute;
  }
}

