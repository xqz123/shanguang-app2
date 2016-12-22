import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HistoryDetailPage } from "../history-detail/history-detail";

/*
  Generated class for the History page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {

  category: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
    this.category = 'mercari';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  // 下拉刷新
  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  showDetail(): any{
    // this.navCtrl.push(HistoryDetailComponent, {historyId: History_id});
    // this.navCtrl.push(HistoryDetailComponent, {});
    this.navCtrl.parent.parent.push(HistoryDetailPage, {});
  }
}
