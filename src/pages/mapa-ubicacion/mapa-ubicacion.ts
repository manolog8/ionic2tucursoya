import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the MapaUbicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa-ubicacion',
  templateUrl: 'mapa-ubicacion.html',
})
export class MapaUbicacionPage {

  latitude: number;
  longitude: number;
  foto: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocationPlugging: Geolocation, private camera: Camera) {
    this.geolocationPlugging.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaUbicacionPage');
  }

  tomarFoto() {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

}
