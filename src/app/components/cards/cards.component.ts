import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {

  randomNumber: number = 1;
  @Output() result = new EventEmitter<number>();
  @Input() rollAgain: any;

  constructor() { }


  ngOnInit(): void {
    this.rollAgain = 1
    this.getRandomInt(12)
    setTimeout(() => this.rollAgain = 0, 300)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.rollAgain > 0) {
      this.getRandomInt(12)
      setTimeout(() => this.rollAgain = 0, 300)
    }
  }

  getRandomInt(max: number) {
    this.randomNumber = -1
    this.randomNumber = Math.floor(Math.random() * max);
    this.result.emit(this.randomNumber)

  }

}
