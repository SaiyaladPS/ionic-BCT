import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.page.html',
  styleUrls: ['./alert-page.page.scss'],
})
export class AlertPagePage implements OnInit {

  constructor(
    private alertCtrl:AlertController,
  ) { }

  ngOnInit() {
  }
  async showAlert(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class', 
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder:'Placeholder 1'
      },
      {
        name: 'name2',
        type: 'text',
        id: 'name2-id',
        value: 'hello',
        placeholder:'Placeholder 2'
    },
    //multiline input.
    {
      name: 'paragraph',
      id: 'paragraph',
      type: 'textarea',
      placeholder:'Placeholder 3'
  },
    ],
    });

    await alert.present();
  }
}
