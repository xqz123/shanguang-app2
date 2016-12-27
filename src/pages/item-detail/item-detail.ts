import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { ItemOptionsPage } from '../item-options/item-options';
import { ItemBuyerInformationPage } from '../item-buyer-information/item-buyer-information';


/*
  Generated class for the ItemDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
    itemName = 'Condominium Redefined';
    itemPrice = 123;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popoverCtrl: PopoverController
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }

  showOptions(): void {
    const popover = this.popoverCtrl.create(ItemOptionsPage, {
      
    }, {
      cssClass: 'options-popover'
    });
    popover.present();
  }

  showItemBuyerInfo(): void{
    this.navCtrl.push(ItemBuyerInformationPage, {});
  }

  editItemName(event:any): void{
    this.itemName = event.target.value;
    console.log(this.itemName);
  }

  editItemPrice(event:any): void{
    this.itemPrice = event.target.value;
  }
}
