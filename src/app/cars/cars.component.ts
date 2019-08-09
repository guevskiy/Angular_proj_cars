import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})

export class CarsComponent {
  carName = '';
  carYear = '';
  addCarStatus = false;
  inputText = '';
  newCars = [];
  cars = [];
  years = [];
  items = [{id: 3, name: 'item1'}, {id: 6, name: 'item2'}, {id: 9, name: 'item3'}, {id: 12, name: 'item4'}];
dates = [
  new Date(2015, 3, 2),
  new Date(2015, 2, 17),
  new Date(2015, 7, 8),
  new Date(2015, 9, 25),
  new Date(2015, 11, 12)
];
people = ['Аня', 'Дима', 'Миша', 'Катя', 'Сеня', 'Боря', 'Гриша', 'Маша', 'Юля', 'Женя', 'Никита', 'Влад', 'Кристина', 'Вика', 'Марина'];

  onKeyUp(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push({model: this.carName, year: this.carYear});
    this.carName = '';
    this.carYear = '';
  }


  clearList() {
    this.cars = [];
    this.addCarStatus = false;
  }
}
