import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { AudioRecorder, AudioRecorderState } from '../../services/audiorecorder';

import { TimerComponent } from '../../services/timer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AudioRecorder]
})
export class HomePage {

  @ViewChild(TimerComponent) timer: TimerComponent;

  radio = this.media.create('EmergenciaAudio_' + Date.now() + '.mp3');
  AudioRecorderState = AudioRecorderState;
  recordings: string [] = [];


  recorded: boolean;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioRecorderPage');
  }

  ngOnInit() {

  }

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public platform: Platform,
    file: File, private media: Media,
    public audioRecorder: AudioRecorder) {
    this.recorded = false;
  }

  startRecording() {

    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)

    this.recorded = false;

    try {
      this.audioRecorder.startRecording();
    }
    catch (e) {
      this.showAlert('Could not start recording.' + e);
    }
  }

  stopRecording() {

    this.recorded = true;
    this.timer.initTimer();

    try {
      this.audioRecorder.stopRecording();
      this.recordings.push('Record ' + this.recordings.length);
    }
    catch (e) {
      this.showAlert('Could not stop recording.');
    }
  }

  startPlayback() {

    try {
      this.audioRecorder.startPlayback();
    }
    catch (e) {
      this.showAlert('Could not play recording.');
    }
  }

  stopPlayback() {

    try {
      this.audioRecorder.stopPlayback();

    }
    catch (e) {
      this.showAlert('Could not stop playing recording.');
    }
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
