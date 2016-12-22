import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CommentDetailPage } from "../comment-detail/comment-detail";

/*
  Generated class for the Comment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {

  category: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
    this.category = 'mercari';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  // 下拉刷新
  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  showDetail(event): any{
    this.navCtrl.parent.parent.push(CommentDetailPage, {});
  }

}
