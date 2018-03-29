import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginCredentialsProvider } from '../../providers/login-credentials/login-credentials';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  constructor(
    public navCtrl: NavController,

  ) {

  }


  loginCreate(username)
  {
    console.log(username);
  

  }

}
