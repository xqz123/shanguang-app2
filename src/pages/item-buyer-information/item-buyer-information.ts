import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-buyer-information',
  templateUrl: 'item-buyer-information.html'
})

export class ItemBuyerInformationPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemBuyerInformationPage');
  }

}