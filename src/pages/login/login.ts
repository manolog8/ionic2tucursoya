import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Login } from '../../model/Login';
import { MapaUbicacionPage } from '../mapa-ubicacion/mapa-ubicacion';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: Login = { usuario: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLogin(form: NgForm) {
    if (form.valid && this.login.usuario=="manuel" && this.login.password=="manuel") {
      this.navCtrl.push(MapaUbicacionPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
