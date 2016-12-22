import { Component } from '@angular/core';

import { ItemPage } from '../item/item';
import { HistoryPage } from '../history/history';
import { CommentPage } from '../comment/comment';
import { MessagePage } from '../message/message';

@Component({
  selector: 'tabs-container',
  template: `
    <ion-tabs color="shanguang">
      <ion-tab [root]="itemRoot" tabTitle="商品一覧" tabIcon="star"></ion-tab>
      <ion-tab [root]="historyRoot" tabTitle="自動出品履歴" tabIcon="star"></ion-tab>
      <ion-tab [root]="commentRoot" tabTitle="商品コメント" tabIcon="star"></ion-tab>
      <ion-tab [root]="messageRoot" tabTitle="メッセージ" tabIcon="star"></ion-tab>
    </ion-tabs>
  `
})
export class TabsContainerComponent {
  itemRoot = ItemPage;
  historyRoot = HistoryPage;
  commentRoot = CommentPage;
  messageRoot = MessagePage;

  constructor() {

  }
}