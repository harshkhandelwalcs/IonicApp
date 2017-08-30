import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from  '../login/login';
import { SignupPage } from '../signup/signup';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
login(){
 this.navCtrl.push(LoginPage);
console.log('login');
}
signup(){
 this.navCtrl.push(SignupPage);
console.log('signup');
}
}
