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
      let time = 20;
      this.dataCurrenciesService.getCurrencyInfo(this.follow.id).subscribe((resp: any) => {
        if (resp.market_data.current_price.usd != this.follow1.priceUsd) {
          this.arrow = true;
          if (resp.market_data.current_price.usd >= this.follow1.priceUsd) {
            this.playAudioWin();
            this.up = true;
            const clignote = setInterval(() => {
              time--;
              this.clignotUp();
              if(time <= 0) {
                clearInterval(clignote);
              }
            }, 800);
            this.down = false;
          } else {
            this.playAudioWloose();
            this.down = true;
            const clignote = setInterval(() => {
              time--;
              this.clignotDown();
              if(time <= 0) {
                clearInterval(clignote);
              }
            }, 800);
            this.up = false;
          }
          this.initFollow(resp);
          console.log('hello');
          console.log(resp.market_data.current_price.usd);
        }
        console.log('10 scd')
      });
    }, (14 + this.index) * 1000)
  }

  clignotUp() {
    this.up? this.up = false : this.up = true;
  }

  clignotDown() {
    this.down? this.down = false : this.down = true;
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

  playAudioWin() {
    let audio = new Audio();
    audio.src = "../../../assets/winer.mp3";
    audio.load();
    audio.play();
  }

  playAudioWloose() {
    let audio = new Audio();
    audio.src = "../../../assets/danger.mp3";
    audio.load();
    audio.play();
  }


}
