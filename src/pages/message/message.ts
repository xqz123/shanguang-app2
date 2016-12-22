import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MessageListPage } from "../message-list/message-list";

/*
  Generated class for the Message page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {

  category: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
    this.category = 'mercari';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  // 下拉刷新
  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  showList(list) {
    this.navCtrl.parent.parent.push(MessageListPage, {list: list});
  }

}
