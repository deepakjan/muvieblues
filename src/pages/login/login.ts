import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  constructor(public navCtrl: NavController, private faio: FingerprintAIO) {
  }
 
  login() {
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', // Only Android
      localizedFallbackTitle: 'Use Pin', // Only iOS
      localizedReason: 'Please authenticate' // Only iOS
    })
      .then((result: any) => {
        //this.navCtrl.push(TabsPage);
        this.navCtrl.setRoot('TabsPage');
      })
      .catch((error: any) => {
        console.log('err: ', error);
      });
  }
}