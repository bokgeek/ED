import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

export enum AudioRecorderState {
    Ready,
    Recording,
    Recorded,
    Playing
}

@Injectable()
export class AudioRecorder {
  radio: MediaObject = null;
  // media: Media;
  newFileName: string;
  state: AudioRecorderState = AudioRecorderState.Ready;

  constructor(
    file: File,
    private media: Media) {
  }

  get Media(): Media {
    if (this.radio == null) {
    //if (this.media == null) {
      //this.media.create('file.mp3');
      this.radio = this.media.create('EmergenciaAudio_' + Date.now() + '.mp3');
    }

    return this.media;
  }

  startRecording() {
    if (this.radio !== null) {
      this.radio.release();
    }
    this.newFileName = 'EmergenciaAudio_' + Date.now() + '.mp3';
    this.radio = this.media.create(this.newFileName);
    this.radio.startRecord();
    console.log("GRABANDO servicio");
    this.state = AudioRecorderState.Recording;
  }

  stopRecording() {
    this.radio.stopRecord();
    this.radio.release();
    this.state = AudioRecorderState.Recorded;
    console.log("DETENIDO servicio");
  }

  startPlayback() {
    this.radio.play();
    this.state = AudioRecorderState.Playing;
  }

  stopPlayback() {
    this.radio.stop();
    this.state = AudioRecorderState.Ready;
    this.radio.release();
  }
}
