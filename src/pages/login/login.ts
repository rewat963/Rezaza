import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //property
  loginresult;

  constructor(public navCtrl: NavController,public navParams:NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(i_username,i_password){
    alert("Hello World "+i_username+" "+i_password);
    if(i_password == '1234'){
      this.loginresult ="Welcome "+i_username;
      this.navCtrl.push("PhoneBookPage");
    }else{
      this.loginresult = "Failed : Try again";
    }
  }
}//end class
