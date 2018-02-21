import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaCursosPage } from '../lista-cursos/lista-cursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  getListaCursos() {
    this.navCtrl.push(ListaCursosPage);
  }


}
