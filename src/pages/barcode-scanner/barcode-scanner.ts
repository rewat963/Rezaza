import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {

  sacnText = "";
  scanFormat = "";

  constructor(private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.sacnText = barcodeData.text;
      this.scanFormat = barcodeData.format;
     }).catch(err => {
         console.log('Error', err);
     });

  }

}//end class 
