import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent {

  carName = 'Ford';
  carYear = '2015';
  addCarStatus = '';
  inputText = '';

  onKeyUp(event: Event) {
    console.log(event);
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  constructor() {
  }

  addCar() {
    this.addCarStatus = 'Машина добавлена';
  }
}
