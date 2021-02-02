import { DispoModel } from './../models/dispo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  STATES = {
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NY: 'New York',
  };
  OPERATORS = ['Metro Transit', 'Ride SMART', 'Westcat', 'Citilink'];
  STATES_LETTERS = Object.keys(this.STATES);
  driveData = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      const theDate = randomDate(new Date(2021, 0, 1), new Date(2021, 0, 30));
      this.driveData.push({
        date: theDate,
        due:
          randomIntFromInterval(3, 5) +
          'h' +
          randomIntFromInterval(2, 59) +
          'm',
        operator: this.OPERATORS[Math.floor(Math.random() * 3) + 1],
        busId: 'GLI' + randomIntFromInterval(12000, 99999),
        price: randomIntFromInterval(10, 40) + '$',
        seats: randomIntFromInterval(15, 40),
        source: this.STATES_LETTERS[
          randomIntFromInterval(0, this.STATES_LETTERS.length)
        ],
        dest: this.STATES_LETTERS[
          randomIntFromInterval(0, this.STATES_LETTERS.length)
        ],
      });
    }

    function randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }

    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }

  lowerPrice = 1000;
  datesArray = [];
  currentDispoDates = [];
  dispoTravels = [];
  datesWeek = [];
  source;
  dest;

  pushTravelsAndLowerPrice(source, dest, date) {
    this.dispoTravels.length = 0;
    let fixDate = new Date(date);
    fixDate.setHours(0, 0, 0, 0);
    for (let index = 0; index < this.driveData.length; index++) {
      this.driveData[index].date.setHours(0, 0, 0, 0);
      if (
        source === this.driveData[index].source &&
        dest === this.driveData[index].dest &&
        fixDate.getTime() === this.driveData[index].date.getTime()
      ) {
        this.dispoTravels.push(this.driveData[index]);
      }
      if (this.driveData[index].price < this.lowerPrice) {
        this.lowerPrice = this.driveData[index].price;
        console.log(this.lowerPrice);
      }
    }
  }

  pushDatesWeek(date) {
    for (let index = 0; index < 7; index++) {
      let fixDate = new Date(date);
      let currentDate = fixDate;
      currentDate.setDate(fixDate.getDate() + index);
      console.log(currentDate);
      this.datesArray.push(currentDate);
    }
  }

  resultDates(source, dest, date) {
    let fixDate = new Date(date);
    fixDate.setHours(0, 0, 0, 0);
    this.dispoTravels.length = 0;

    this.pushTravelsAndLowerPrice(source, dest, fixDate);

    this.pushDatesWeek(date);
  }
}
