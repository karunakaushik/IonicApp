import { ImageModalPage } from './../image-modal/image-modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sliderOpts= {
    zoom:false,
    slidesPreView : 1.5,
    centeredSlides : true,
    spaceBetween : 20
  }
  constructor( private modalController : ModalController) {}

  openPreview(img){
    this.modalController.create({
      component:ImageModalPage,
      componentProps:{
        img: img
      }
    })
    .then(modal => modal.present());
  }

}
