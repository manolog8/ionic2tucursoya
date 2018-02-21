import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCursosPage } from './lista-cursos';

@NgModule({
  declarations: [
    ListaCursosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCursosPage),
  ],
})
export class ListaCursosPageModule {}
