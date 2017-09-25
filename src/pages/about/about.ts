import { Component } from '@angular/core';
import { NavController, Platform  } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  title: string = 'My first AGM project';
  lat: number = 36.739585;
  lng: number = -4.55737;
  zoom: number = 8;

  constructor(public navCtrl: NavController, public platform: Platform) {
        platform.ready().then(() => { });
    }


}
