import { Component } from '@angular/core';
import { WifiWizard2Original } from '@ionic-native/wifi-wizard-2';
declare var WifiWizard2: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ssid:string = "";
  bssid:string = "";
  latitude:string = "";
  longitude:string = "";
  constructor() {}

  checkWifi():void{
    this.checkWifi2();
  }
  checkWifi2():void{
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        //alert(position.coords.latitude+" ; "+position.coords.longitude);
        this.latitude = position.coords.latitude.toString();
        this.longitude = position.coords.longitude.toString();
      });
    } else {
      // Pas de support, proposer une alternative ?
    }

    WifiWizard2.getConnectedSSID().then((ssid) => {
      //alert("Get ssid success: " + ssid);
      this.ssid = ssid;
    }).catch((err) => {
      alert("Failed to get ssid, please check the error↓");
      alert(err);
      this.checkWifi2();
    });

    WifiWizard2.getConnectedBSSID().then((bssid)=>{
      //alert("Get bssid success: " + bssid);
      this.bssid = bssid;
    }).catch((err) => {
      alert("Failed to get bssid, please check the error↓");
      alert(err);
      this.checkWifi2();
    });
  }

}
