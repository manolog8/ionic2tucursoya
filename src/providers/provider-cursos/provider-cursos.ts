import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../../model/curso';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProviderCursosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderCursosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProviderCursosProvider Provider');
  }

  getListaCursos(): Observable<Curso[]> {
    return this.http.get('assets/cursos.json')
      .map((json: Curso[]) => json);
  }

}
