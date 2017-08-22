import { StoreFacadeService } from './../store-facade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  time = 0;
  interval: any;
  isStopped = true;
  constructor(private store: StoreFacadeService) { }

  ngOnInit() {
    this.store.counter.subscribe(res => res ? this.startTimer() : this.stopTimer());
    this.store.time.subscribe(time => this.time = time);
  }

  startTimer() {
    clearInterval(this.interval);
    this.isStopped = false;
    this.interval = setInterval(() => this.countDown(), 1000);
  }

  countDown() {
    if (this.time === 0) {
      console.log('Stopped');
      this.store.counterEnded();
      clearInterval(this.interval);
    } else {
      this.time = this.time - 1;
    }
  }

  stopTimer() {
    this.isStopped = true;
  }

}
