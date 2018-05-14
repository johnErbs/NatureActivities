import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-activity-route',
  templateUrl: './create-activity-route.component.html',
  styleUrls: ['./create-activity-route.component.css']
})
export class CreateActivityRouteComponent implements OnInit {
  public markerName: string;
  public markerDesc: string;
  public txtLat: number;
  public txtLng: number;
  public title = 'Aktivitets guiden';
  public titleDesciption = 'for naturoplevelses-ruter i Danmark';
  // set the zoomlevel
  public zoomLevel = 10;
  // startpositions
  public latStartPos = 56.357068;
  public lngStartPos = 8.618926;
  // Marker-objects
  public markers: Marker[] = [];

  clickedMarker(marker: Marker, index: number) {
    console.log( 'clicked marker ' + marker.name + ' at index ' + index );
  }

  mapClicked($event: any) {
    console.log('Map clicked!', $event);
    const newMarker = {
      name: 'Navn: ',
      description: 'Beskrivelse: ',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    };

    this.markers.push(newMarker);
  }

  markerDraggEnd(marker: Marker, index: number, $event: any) {
    console.log('dragg end:::Marker is:  ' + marker +  ' Index is: ' + index + ' latitude is: ' + $event.coords.lat);
    const newMarker = {
      name: '',
      description: '',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    };


    for (let i = 0; i < this.markers.length; i++) {
      console.log(this.markers[i]);
      if (index === i) {
        this.markers.splice(i, 1, newMarker);
      }
    }
  }

  SaveMarkerTxt() {
    const mkName = this.markerName;
    const mkDesc = this.markerDesc;
    console.log('MarkerName is: ' + mkName + ' Markerdescription is: ' + mkDesc);
  }

  Upload() {
    console.log('Teeeest..... ' + this.markerName);
    for (let i = 0; i < this.markers.length; i++) {
      console.log(this.markers[i]);
    }
  }

  constructor() { }

  ngOnInit() {
  }
}

interface Marker {
  name: string;
  description: string;
  lat: number;
  lng: number;
  draggable: boolean;
}



