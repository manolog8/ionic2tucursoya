import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaCursosPageModule } from '../pages/lista-cursos/lista-cursos.module';
import { ProviderCursosProvider } from '../providers/provider-cursos/provider-cursos';
import { HttpClientModule } from '@angular/common/http';
import { DetalleCursoPageModule } from '../pages/detalle-curso/detalle-curso.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ListaCursosPageModule,
    DetalleCursoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProviderCursosProvider
  ]
})
export class AppModule {}
