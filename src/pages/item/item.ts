import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';

/*
  Generated class for the Item page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

  category: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
    this.category = 'mercari';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

  showDetail(): void{
    this.navCtrl.parent.parent.push(ItemDetailPage, {});
  }

}
