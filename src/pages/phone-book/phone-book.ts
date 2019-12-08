import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{ name: 'Prayuth1', teephone: '090060', imageUrl: 'assets/imgs/yut1.jpg' },
                  { name: 'Prayuth2', teephone: '090060', imageUrl: 'assets/imgs/yut2.jpg' },
                  { name: 'Prayuth3', teephone: '090060', imageUrl: 'assets/imgs/yut3.jpg' },
                  { name: 'Prayuth4', teephone: '090060', imageUrl: 'assets/imgs/yut4.jpg' }
                ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

}//end class
