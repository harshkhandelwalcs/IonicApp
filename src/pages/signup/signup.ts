import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupProvider } from '../../providers/signup/signup';
import { WelcomePage } from '../welcome/welcome';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private _signupProvider:SignupProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  postSignup(value:any){
   this._signupProvider.postData('signup', value)
   .subscribe((data)=>{
        if (data.msg == "Successful created new user.") {
          let title = "Success!!";
          this._signupProvider.showAlert(data.msg,title);
          this.navCtrl.push(LoginPage);

        } else if(data.msg == "Username already exists."){
          let title = "Error!!";
          this._signupProvider.showAlert(data.msg,title);
        

          }else {
          this.navCtrl.push(WelcomePage);
        }
   })
  }

}
