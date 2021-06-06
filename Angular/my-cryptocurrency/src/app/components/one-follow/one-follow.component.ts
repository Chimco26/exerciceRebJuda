import { CurrencyModel } from './../../models/currency.model';
import { Observable } from 'rxjs';
import { DataCurrenciesService } from './../../services/data-currencies.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-follow',
  templateUrl: './one-follow.component.html',
  styleUrls: ['./one-follow.component.css']
})
export class OneFollowComponent implements OnInit, OnDestroy {

  @Input() follow: CurrencyModel;
  @Input() index: number;
  follow1: CurrencyModel;
  arrow = false;
  up: boolean;
  down: boolean;
  intervalFollows;
  time: number;

  constructor(public dataCurrenciesService: DataCurrenciesService) {
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalFollows);
  }

  ngOnInit() {
    this.dataCurrenciesService.getCurrencyInfo(this.follow.id).subscribe((resp: any) => {
      this.initFollow(resp);
      console.log('hello');
      console.log(resp.market_data.current_price.usd);
    }
    )

    this.intervalFollows = setInterval(() => {
      this.time = 16;
      this.dataCurrenciesService.getCurrencyInfo(this.follow.id).subscribe((resp: any) => {
        if (resp.market_data.current_price.usd != this.follow1.priceUsd) {
          this.arrow = true;
          if (resp.market_data.current_price.usd >= this.follow1.priceUsd) {
            this.flashAndAudioUp();
          } else {
            this.flashAndAudioDown()
          }
          this.initFollow(resp);
          console.log('hello');
          console.log(resp.market_data.current_price.usd);
        }
        console.log('10 scd')
      });
    }, (14 + this.index) * 1000)
  }

  initFollow(resp: any) {
    this.follow1 = {
      id: resp.id,
      name: resp.name,
      symbol: resp.symbol,
      image: resp.image.small,
      priceUsd: resp.market_data.current_price.usd,
      priceEur: resp.market_data.current_price.eur,
      priceNis: resp.market_data.current_price.ils,
    }
  }

  removeFollow() {
    this.dataCurrenciesService.spliceFollow(this.follow.id)
  }
  
  flashUp() {
    this.up? this.up = false : this.up = true;
  }

  flashDown() {
    this.down? this.down = false : this.down = true;
  }

  playAudioWin() {
    let audio = new Audio();
    audio.src = "../../../assets/winer.mp3";
    audio.load();
    audio.play();
  }

  playAudioLoose() {
    let audio = new Audio();
    audio.src = "../../../assets/danger.mp3";
    audio.load();
    audio.play();
  }

  flashAndAudioUp() {
    this.playAudioWin();
    this.down = false;
    const clignote = setInterval(() => {
      this.time--;
      this.flashUp();
      if(this.time <= 0) {
        clearInterval(clignote);
        this.up = true;
      }
    }, 800);
  }

  flashAndAudioDown() {
    this.playAudioLoose();
    this.up = false;
    const clignote = setInterval(() => {
      this.time--;
      this.flashDown();
      if(this.time <= 0) {
        clearInterval(clignote);
        this.down = true;
      }
    }, 800);
  }

}
