import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-clothtech',
  templateUrl: './clothtech.page.html',
  styleUrls: ['./clothtech.page.scss'],
})
export class ClothtechPage implements OnInit {
  encodedData = '';
  QRSCANNED_DATA: string;
  isOn = false;
  scannedData: {};
  constructor(private barcodeScanner: BarcodeScanner, public authService: AuthenticationService) { }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      
    }).catch(err => {
      // error
    });
  }

  ngOnInit(){
  
  }
}
