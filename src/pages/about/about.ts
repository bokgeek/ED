import { Component } from '@angular/core';
import { NavController, Platform  } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMaps,  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(public navCtrl: NavController, public platform: Platform, private googleMaps: GoogleMaps) {
        platform.ready().then(() => {
            // this.loadMap();

        });
    }

    ionViewDidLoad() {
      setTimeout(() => {
        this.loadMap();
        }, 100);
     }

    loadMap(){
      this.mapElement = document.getElementById('map');

        // let location = new GoogleMapsLatLng(-34.9290,138.6010);
        let mapOptions: GoogleMapOptions = {
          camera: {
            target: {
              lat: 43.0741904,
              lng: -89.3809802
            },
            zoom: 18,
            tilt: 30
          }
        };

        this.map = this.googleMaps.create(this.mapElement, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      console.log('Map is ready!');

      // Now you can use all methods safely.
      this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              alert('clicked');
            });
        });

    });


        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');
        });

    }
}
