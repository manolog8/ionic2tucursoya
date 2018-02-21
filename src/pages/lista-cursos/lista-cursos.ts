import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Curso } from '../../model/Curso';
import { ProviderCursosProvider } from '../../providers/provider-cursos/provider-cursos';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public providerCursosProvider: ProviderCursosProvider) {
  }

  ionViewDidLoad() {
    this.providerCursosProvider.getListaCursos().subscribe(d => {
      console.log(d);
      this.cursos = d;
    });
  }


}

}
