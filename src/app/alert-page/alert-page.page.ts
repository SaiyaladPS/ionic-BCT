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
      cssClass: 'My-custom-clas',
      header:'Prompt!',
      inputs:[
        {
          
          name:'firstname:',
          type:'text',
          placeholder:'enter your firstname'
        },
        {
          name:'lastname:',
          type:'text',
          placeholder:'enter your lastname'
        },
        {
          name:'dob',
          type:'date'
        },
        {
          
          type:'radio',
         label:'Female',
         value:'Female'
        },
        {
          name:'number',
          type:'number',
          placeholder:'enter your number'
        },
        {
          name:'password',
          type:'password',
          placeholder:'enter your password'
        },
        {
          name:'re-password',
          type:'password',
          placeholder:'enter your re-password'
        },
      ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel',
          cssClass:'secondary',
          handler: () =>{
            
          }
        },
        {
          text:'OK',
          handler:(value:any)=>{
            console.log('confirm',value);
            this.showUserData(value);
          }
        }]
    });
    await alert.present();
    
}

async showUserData(data: any) {

const alert = await this.alertCtrl.create({
  header: 'User Data',
  message: JSON.stringify(data) , // แสดงข้อมูลในรูปแบบ JSON
  buttons: ['OK']
});

await alert.present();
}
}
