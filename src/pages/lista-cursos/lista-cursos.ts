import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Curso } from '../../model/Curso';
import { ProviderCursosProvider } from '../../providers/provider-cursos/provider-cursos';
import { DetalleCursoPage } from '../detalle-curso/detalle-curso';

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

  cursos: Curso[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public providerCursosProvider: ProviderCursosProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.providerCursosProvider.getListaCursos().subscribe(d => {
      console.log(d);
      this.cursos = d;
    });
  }

  verCurso(curso: Curso[]) {
    let modal = this.modalCtrl.create(DetalleCursoPage, { curso: curso });
    modal.present();
  }

  enviarCarrito(curso: Curso[]) {
    return null;
  }


}