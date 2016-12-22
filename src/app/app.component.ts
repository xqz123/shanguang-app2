import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsContainerComponent } from '../pages/tabs-container/tabs-container.component';


@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage = TabsContainerComponent;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
