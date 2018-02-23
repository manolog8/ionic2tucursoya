import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Curso } from '../../model/Curso';

/**
 * Generated class for the CarritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

  valorCursos: number = 0;
  totalCursos: Curso[] = [];
  curso: Curso;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.curso = this.navParams.get("curso");
    storage.set(this.curso.nombreCurso.toString(), this.curso);
    storage.get(this.curso.nombreCurso.toString()).then((val) => {
      storage.forEach((value, key, index) => {
        this.totalCursos.push(value)
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritoPage');
  }

  getValorCursos() {
    let total = 0;
    this.totalCursos.forEach((value, key, index) => {
      total += value.precioCurso;
    })
    this.valorCursos = total;
    return total;
  }

  delCurso(curso: Curso, index: any) {
    this.storage.remove(this.curso.nombreCurso.toString());
    this.totalCursos.splice(index, 1);
  }

  comprarCurso() {
    return "";
  }

}
