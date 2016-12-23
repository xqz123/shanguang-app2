import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-options',
  templateUrl: 'item-options.html'
})
export class ItemOptionsPage {
      constructor(public navCtrl: NavController, public navParams: NavParams) {}

        ionViewDidLoad() {
    console.log('ionViewDidLoad ItemOptionsPage');
  }
}