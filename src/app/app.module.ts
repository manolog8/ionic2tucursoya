import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaCursosPageModule } from '../pages/lista-cursos/lista-cursos.module';
import { ProviderCursosProvider } from '../providers/provider-cursos/provider-cursos';
import { HttpClientModule } from '@angular/common/http';
import { DetalleCursoPageModule } from '../pages/detalle-curso/detalle-curso.module';
import { CarritoPageModule } from '../pages/carrito/carrito.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MapaUbicacionPageModule } from '../pages/mapa-ubicacion/mapa-ubicacion.module';

import { Geolocation } from '@ionic-native/geolocation';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Camera, CameraOptions } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    ListaCursosPageModule,
    DetalleCursoPageModule,
    CarritoPageModule,
    LoginPageModule,
    MapaUbicacionPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProviderCursosProvider,
    Geolocation,
    LocalNotifications,
    Camera
  ]
})
export class AppModule { }
