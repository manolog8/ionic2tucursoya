import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleCursoPage } from './detalle-curso';

@NgModule({
  declarations: [
    DetalleCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleCursoPage),
  ],
})
export class DetalleCursoPageModule {}
