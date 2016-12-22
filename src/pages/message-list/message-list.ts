import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MessageList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-message-list',
  templateUrl: 'message-list.html'
})
export class MessageListPage {

  category: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
    this.category = navParams.get('list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageListPage');
  }

  // 下拉刷新
  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

}
