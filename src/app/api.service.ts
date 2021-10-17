import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  API_KEY = 'Y24bd80c24960d3cf31733291331a298ae53520fc2bfdb3910451fbf0cf021902';


  public getNews() {
    return this.httpClient.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key{this.API_KEY}');


}
}
