import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
// import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs';
import { AlertController } from 'ionic-angular';


@Injectable()
export class LoginProvider {

  private apiBasePath: any = "http://localhost:8080/";

  constructor(
    public _http: Http,
    public alertCtrl: AlertController
  ) {
    console.log('Hello LoginProvider Provider');
  }


  showAlert(){
      let alert = this.alertCtrl.create({
      title: 'ERROR!',
      subTitle: 'Authentication failed. User not found.',
      buttons: ['OK']
    });
      alert.present();
        }

  postData(url,data){
    let apiUrl = this.apiBasePath + url;

    return this._http.post(apiUrl, data)
    .map((response: Response)=> {
      console.log("res", response.json());
      return response.json();
    })
    .catch(this.handleError);
  }

  private handleError(error:Response | any){
    let errMsg: string;
       if (error instanceof Response) {
           const body = error.json() || '';
           errMsg = (body.message) || '';
       } else {
           errMsg = error.message ? error.message : error.toString();
       }
       console.log(errMsg)
       return Observable.throw(errMsg);
  }
}

