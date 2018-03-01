import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  onLogin(form: NgForm) {
    if (form.valid && this.login.usuario == "manuel" && this.login.password == "manuel") {
      this.navCtrl.push(MapaUbicacionPage);
    } else {
      this.presentToast();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Datos incorrectos, vuelva a intentarlo.',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
