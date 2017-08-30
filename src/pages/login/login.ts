import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
// import { GooglePlus } from '@ionic-native/google-plus';
import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _loginProvider: LoginProvider,
    // private googlePlus: GooglePlus
  ) {

  }

  // displayName: any;
  // email: any;
  // familyName: any;
  // givenName: any;
  // userId: any;
  // imageUrl: any;

  // isLoggedIn: boolean = false;


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }




  postLogin(value: any) {


    this._loginProvider.postData('authenticate', value)
      .subscribe((data) => {

        if (data.msg == "Authentication failed. User not found.") {
          this._loginProvider.showAlert();

        } else {
          this.navCtrl.push(WelcomePage);
        }
      })
  }

  // googleLogin() {

  //   this.googlePlus.login({})
  //     .then(res => {
  //       console.log(res);
  //       this.displayName = res.displayName;
  //       this.email = res.email;
  //       this.familyName = res.familyName;
  //       this.givenName = res.givenName;
  //       this.userId = res.userId;
  //       this.imageUrl = res.imageUrl;

  //       this.isLoggedIn = true;
  //     })
  //     .catch(err => console.error(err));
  // }

}
