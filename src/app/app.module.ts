import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import {HttpClientModule} from '@angular/common/http';



const firebaseConfig = {
  apiKey: "AIzaSyAZRBnYJEDeZJaLWdCfDQonlYYYX2_6Bh4",
  authDomain: "ozo-order.firebaseapp.com",
  databaseURL: "https://ozo-order.firebaseio.com",
  projectId: "ozo-order",
  storageBucket: "ozo-order.appspot.com",
  messagingSenderId: "628604824573"
};


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
