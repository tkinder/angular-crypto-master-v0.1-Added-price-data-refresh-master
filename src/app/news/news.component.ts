import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  objectKeys = Object.keys;
  updates: any;
  interval: any;


  constructor(public _data: DataService) {

   }

  ngOnInit() {

       this.refreshData()
      this.interval = setInterval (() => {
        this.refreshData();
      }, 30000);

      }

  refreshData() {
    this._data.getNews()
      .subscribe(res => {
        this.updates = res;
        console.log(res);
      });
    }
  }












