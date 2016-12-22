import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AppComponent } from './app.component';
import { TabsContainerComponent } from '../pages/tabs-container/tabs-container.component';
import { ItemPage } from '../pages/item/item';
import { HistoryPage } from '../pages/history/history';
import { CommentPage } from '../pages/comment/comment';
import { MessagePage } from '../pages/message/message';
import { CommentDetailPage } from '../pages/comment-detail/comment-detail';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { HistoryDetailPage } from '../pages/history-detail/history-detail';
import { MessageListPage } from '../pages/message-list/message-list';


@NgModule({
  declarations: [
    AppComponent,
    TabsContainerComponent,
    ItemPage,
    HistoryPage,
    CommentPage,
    MessagePage,
    CommentDetailPage,
    ItemDetailPage,
    MessageListPage,
    HistoryDetailPage
  ],
  entryComponents: [
    AppComponent,
    TabsContainerComponent,
    ItemPage,
    HistoryPage,
    CommentPage,
    MessagePage,
    MessageListPage,
    HistoryDetailPage,
    ItemDetailPage,
    CommentDetailPage
  ],
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [IonicApp],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler
  }]
})
export class AppModule {}
