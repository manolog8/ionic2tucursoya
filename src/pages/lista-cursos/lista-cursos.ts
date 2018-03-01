import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Curso } from '../../model/Curso';
import { ProviderCursosProvider } from '../../providers/provider-cursos/provider-cursos';
import { DetalleCursoPage } from '../detalle-curso/detalle-curso';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the ListaCursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-cursos',
  templateUrl: 'lista-cursos.html',
})
export class ListaCursosPage {

  valorCursos: number = 0;
  cursos: Curso[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public providerCursosProvider: ProviderCursosProvider, public modalCtrl: ModalController, private storage: Storage) {

  }

  ionViewDidLoad() {
    this.providerCursosProvider.getListaCursos().subscribe(d => {
      console.log(d);
      this.cursos = d;
    });

  }

  ionViewCanEnter() {
    this.valorCursos=0;
    this.storage.forEach((value, key, index) => {
      this.valorCursos += value.precioCurso;
    })
  }


  verCurso(curso: Curso[]) {
    let modal = this.modalCtrl.create(DetalleCursoPage, { curso: curso });
    modal.present();
  }

  enviarCarrito(curso: Curso[]) {
    this.navCtrl.push(CarritoPage, { curso: curso });
  }
}