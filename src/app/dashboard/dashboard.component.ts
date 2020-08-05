import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {} from 'googlemaps';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public latlongs: any = [];
  public latlong: any = {};
  public searchControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.zoom = 4;

    this.searchControl = new FormControl();
    this.setCurrentPosition();
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 5;
      })
    }
  }

  takeItAllIn(event) {
    this.latlongs = [];
    var geocoder = new google.maps.Geocoder();

    event.map((item) => {
      geocoder.geocode({ 'address': item.description }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          let latlong = {
            latitude: results[0].geometry.location.lat(),
            longitude: results[0].geometry.location.lng(),
            place_name: item.description,
            place_id: item.place_id
          };
          this.latlongs.push(latlong);
        }
      });
    })
  }
isActive: boolean = false;
  activeMarker(event) {
    this.latlongs.map((item) => {
      if(item.place_id === event.place_id) {
        this.isActive = true;
        // debugger  
      }
    })
  }

}
