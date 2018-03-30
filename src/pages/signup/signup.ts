import { Component } from '@angular/core';
import {
   NavController,
   NavParams,
   AlertController,
   ToastController

   } from 'ionic-angular';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  loginCredentials :FirebaseListObservable<any[]>;


  setRadioButton = [
    {typeButton: 'radio',labelName: 'General Manager',getValue: 'generalmanager',checked: true},
    {typeButton: 'radio',labelName: 'Team Leader',getValue: 'teamleader',checked: false },
    {typeButton: 'radio',labelName: 'Field Officer',getValue: 'fieldofficer',checked: false },
    {typeButton: 'radio',labelName: 'Distict Manager',getValue: 'districtmanager',checked: false },

  ]

  constructor(
    public alertCtrl :AlertController,
    public toastCtrl: ToastController,
    public firebasedb: AngularFireDatabase
  )
  {
    this.loginCredentials = this.firebasedb.list('/userDetails/');

  }

  signupCredentials(username :string,email :string,password :string,confirmPassword :string,mobile :number)
  {

    console.log(username,email,password,confirmPassword);
   
    const alert = this.alertCtrl.create();
    alert.setTitle('Choose the Authorisation');

    for(var i=0; i<this.setRadioButton.length;i++)
    {
      alert.addInput({
        type: this.setRadioButton[i].typeButton,
        label: this.setRadioButton[i].labelName,
        value: this.setRadioButton[i].getValue,
        checked: this.setRadioButton[i].checked
      });

    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {

        const toast = this.toastCtrl.create({
          message: 'Thank you' + username + 'for signing up as '+ data,
          duration: 2000
        });
        toast.present();

        this.loginCredentials.push({
          username: username,
          email: email,
          authority: data,
        });

      }
    });
    alert.present();

    //storing it to the firebase variables 
   
  }




  
  
  

  
}
