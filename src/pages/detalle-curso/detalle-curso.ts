import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, NavController } from 'ionic-angular';
import { Curso } from '../../model/Curso';

/**
 * Generated class for the DetalleCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-curso',
  templateUrl: 'detalle-curso.html',
})
export class DetalleCursoPage {

  curso: Curso;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public navCtrl: NavController) {
    this.curso = this.navParams.get("curso");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleCursoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  }
