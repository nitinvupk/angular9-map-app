import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {} from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'angular9-map-test';

  // public zoom: number;
  // public latitude: number;
  // public longitude: number;
  // public latlongs: any = [];
  // public latlong: any = {};
  // public searchControl: FormControl;

  constructor() {

  }

  ngOnInit () {
    // this.zoom = 12;
    // this.latitude = 39.8282;
    // this.latitude = -98.5795;

    // this.searchControl = new FormControl();
    // this.setCurrentPosition();

    // this.mapsAPILoader.load().then(() => {
    //   const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {});
    //   console.log(autocomplete);
      
    //   autocomplete.addListener('place_changed', () => {
    //     this.ngZone.run(() => {
    //       const place: google.maps.places.PlaceResult = autocomplete.getPlace();
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return ;
    //       }
    //       const latlong = {
    //         latitude : place.geometry.location.lat(),
    //         longitude : place.geometry.location.lng(),
    //         place_name : place.address_components[0].long_name
    //       };

    //       this.latlongs.push(latlong);
    //       this.searchControl.reset();
    //     });
    //   })
    // });
  }

  // private setCurrentPosition() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 5;
  //     })
  //   }
  // }

  // takeItAllIn(event) {
  //   this.latlongs = [];
  //   var geocoder = new google.maps.Geocoder();

  //   event.map((item) => {
  //     geocoder.geocode( { 'address': item.description}, (results, status) => {
  //       if (status == google.maps.GeocoderStatus.OK)
  //       {
  //         let latlong = {
  //             latitude : results[0].geometry.location.lat(),
  //             longitude : results[0].geometry.location.lng(),
  //             place_name : item.description
  //           };
  //         this.latlongs.push(latlong);
  //       }
  //     });
  //   })
  // }
}
