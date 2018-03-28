import { Component } from '@angular/core';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modal: ModalController) {

  }

  openModal() {

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: true,
      cssClass:"modal"
    };

    const myModalData = {
      name: 'Paul Halliday',
      occupation: 'Developer'
    };

    const myModal: Modal = this.modal.create('TestPage', { data: myModalData }, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });

  }

  public ctaButton: any;

  ionViewDidLoad() {
    this.ctaButton = document.getElementById('ctaButton').addEventListener('click', () => {
      const butttonCSSClassList: string = document.getElementById('ctaButton').className;
      this.openModal();
    });
  }

}