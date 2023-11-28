import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

public alertButtons = ['OK'];
public alertInputs = [
  {
    label: 'Red',
    type: 'radio',
    value: 'red',
  },
  {
    label: 'Blue',
    type: 'radio',
    value: 'blue',
  },
  {
    label: 'Green',
    type: 'radio',
    value: 'green',
  },
];

}
