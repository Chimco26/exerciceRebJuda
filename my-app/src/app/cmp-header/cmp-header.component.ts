import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-header',
  templateUrl: './cmp-header.component.html',
  styleUrls: ['./cmp-header.component.css']
})
export class CmpHeaderComponent implements OnInit {

  dataTravel = {
    source: null,
    dest: null,
    date: new Date(),
  }

  chooseSelectSource(source: string) {
    this.dataTravel.source = source;
  }

  chooseSelectDest(dest: string) {
    this.dataTravel.dest = dest;
  }

  chooseSelectDate(date: Date) {
    this.dataTravel.date = new Date();
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  resultDates() {
    console.log(this.dataTravel);
    console.log(typeof this.dataTravel.date);
    console.log(this.dataService.driveData);
    let currentDate =new Date(this.dataTravel.date);
    let demain = new Date(currentDate.getDate() + 1);
    console.log(currentDate);
    console.log(demain);
    currentDate.setHours(0,0,0,0);
    this.dataService.dispoDates.length = 0;

    for (let index = 0; index < this.dataService.driveData.length; index++) {
      this.dataService.driveData[index].date.setHours(0,0,0,0)
      // console.log(currentDate.getTime() === this.dataService.driveData[index].date.getTime());
      if(this.dataTravel.source === this.dataService.driveData[index].source &&
        this.dataTravel.dest === this.dataService.driveData[index].dest &&
        currentDate.getTime() === this.dataService.driveData[index].date.getTime()) {
          console.log("yes");
          this.dataService.dispoDates.push(this.dataService.driveData[index]);
          console.log(this.dataService.dispoDates);
        } else {
          console.log("no");
        }

    }

}
}
