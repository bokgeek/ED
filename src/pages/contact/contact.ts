
import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  radio = this.media.create('file.mp3');

  constructor(public navCtrl: NavController, platform: Platform,  file: File, private media: Media) {


    //   stopAudio() {
    //   const radio: MediaObject = this.media.create('MY_URL');
    //   radio.stop();
    //   }

}

playAudio2() {
  // const radio: MediaObject = this.media.create('MY_URL');
  // radio.play();
  this.radio.startRecord();
  }

playAudio() {
  this.radio = this.media.create('MY_URL'); this.radio.play();
}
stopRecord() {
  this.radio.stopRecord();
}
  }


