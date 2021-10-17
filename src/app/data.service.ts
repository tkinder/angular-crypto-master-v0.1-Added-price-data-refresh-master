import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;


  constructor(private _http: HttpClient) { }

  getPrices() {
    return this._http.get
    ('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD&api_key=24bd80c24960d3cf31733291331a298ae53520fc2bfdb3910451fbf0cf021902')
      .map(result => this.result = result);
  }

 getNews() {
    return this._http.get
    ('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=24bd80c24960d3cf31733291331a298ae53520fc2bfdb3910451fbf0cf021902')
    .map(result => this.result = result);
  }

}
