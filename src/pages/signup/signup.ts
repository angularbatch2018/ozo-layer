import { Component } from '@angular/core';
import {
   NavController,
   NavParams,
   AlertController,
   ToastController

   } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  setRadioButton = [
    {typeButton: 'radio',labelName: 'General Manager',getValue: 'generalmanager',checked: true},
    {typeButton: 'radio',labelName: 'Team Leader',getValue: 'teamleader',checked: false },
    {typeButton: 'radio',labelName: 'Field Officer',getValue: 'fieldofficer',checked: false },
    {typeButton: 'radio',labelName: 'Distict Manager',getValue: 'districtmanager',checked: false },

  ]

  constructor(public alertCtrl :AlertController,public toastCtrl: ToastController)
  {

  }

  signupCredentials(username)
  {
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
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
        // console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Thank you' + username + 'for signing up as '+ data,
          duration: 2000
        });
        toast.present();

      }
    });
    alert.present();
  }

  
}
