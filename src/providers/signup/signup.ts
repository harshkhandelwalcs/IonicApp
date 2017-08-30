import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
// import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the SignupProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SignupProvider {

  private apiBasePath: any = "http://localhost:8080/";

  constructor(public http: Http,
    public alertCtrl: AlertController) {
    console.log('Hello SignupProvider Provider');
  }

   showAlert(msg,title){
      let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
      alert.present();
        }

  postData(url, body) {
    let apiUrl = this.apiBasePath + url;

    return this.http.post(apiUrl, body)
      .map((response: Response) => {
        console.log(response.json());
        return response.json()
      })

  }

}
