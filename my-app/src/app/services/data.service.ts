import { DispoModel } from './../models/dispo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  STATES = {
    MS: 'Mississippi',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NY: 'New York',
    WA: 'Washington',
  };
  OPERATORS = ['Metro Transit', 'Ride SMART', 'Westcat', 'Citilink'];
  STATES_LETTERS = Object.keys(this.STATES);
  driveData = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      const theDate = randomDate(new Date(2021, 0, 1), new Date(2021, 0, 8));
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

  dataTravel;
  lowerPrice = [1000, 1000, 1000, 1000, 1000, 1000, 1000];
  datesArray = [];
  currentDispoDates = [];
  dispoDates = [[]];

  resultDates() {
    let fixDate = new Date(this.dataTravel.date);
    let currentDate = fixDate;
    fixDate.setHours(0, 0, 0, 0);
    this.dispoDates.length = 0;

    for (let indexD = 0; indexD < 7; indexD++) {
      currentDate.setDate(fixDate.getDate() + indexD);
      this.datesArray.push(currentDate);
      for (let index = 0; index < this.driveData.length; index++) {
        this.driveData[index].date.setHours(0, 0, 0, 0);
        if (
          this.dataTravel.source === this.driveData[index].source &&
          this.dataTravel.dest === this.driveData[index].dest &&
          currentDate.getTime() === this.driveData[index].date.getTime()
        ) {
          debugger;
          this.dispoDates[indexD].push(this.driveData[index]);
          if (this.driveData[index].price < this.lowerPrice[indexD]) {
            this.lowerPrice[indexD] = this.driveData[index].price;
          }
        }
      }
    }
  }
}
