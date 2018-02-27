import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocationPlugging: Geolocation) {
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

}
