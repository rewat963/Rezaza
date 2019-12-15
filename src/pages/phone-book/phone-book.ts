import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{ name: 'Prayuth1', telephone: '090060', imageUrl: 'assets/imgs/yut1.jpg' },
                  { name: 'Prayuth2', telephone: '090060', imageUrl: 'assets/imgs/yut2.jpg' },
                  { name: 'Prayuth3', telephone: '090060', imageUrl: 'assets/imgs/yut3.jpg' },
                  { name: 'Prayuth4', telephone: '090060', imageUrl: 'assets/imgs/yut4.jpg' }
                ];
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);

  }

}//end class
