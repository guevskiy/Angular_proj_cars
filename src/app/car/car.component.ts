import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent {

  carName = 'Ford';
  carYear = '2015';
  canAddCar = true;

  constructor() {
    setTimeout(() => {
      this.canAddCar = false;
    }, 4000);
  }
}
