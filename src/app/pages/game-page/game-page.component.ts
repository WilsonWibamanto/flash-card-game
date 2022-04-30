import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  firstNumber: number = 1;
  secondNumber: number = 2;
  operator: string = "";
  score: number = 0;
  index: number = 0;
  time: number = 30;
  minute: number = 0;
  gameOver: boolean = false;
  seconds: any;
  calculations: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.setCountdown();
  }

  setCountdown() {
    this.score = 0;
    var interval = setInterval(() => {
      this.minute = Math.floor(this.time / 60);
      this.seconds = this.time % 60;
      this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
      this.time--;
      if (this.time === -1) {
        clearInterval(interval)
        console.log('Game Over')
        this.gameOver = true;
      }

    }, 1000)


  }

  restartGame() {
    this.gameOver = false;
    this.time = 30;
    this.index = this.index + 1;
    this.calculations = [];
    this.setCountdown()
  }


  getFirstNumber(number: number) {
    this.firstNumber = number;
  }

  getSecondNumber(number: number) {
    this.secondNumber = number;

  }

  getOperator(operator: string) {
    this.operator = operator;

  }

  submitAnswer(value: any) {
    let answer = 0;
    this.index = this.index + 1;
    switch (this.operator) {
      case '/':
        answer = this.firstNumber / this.secondNumber
        break;
      case '*':
        answer = this.firstNumber * this.secondNumber
        break;
      case '+':
        answer = this.firstNumber + this.secondNumber
        break;
      case '-':
        answer = this.firstNumber - this.secondNumber
        break;
    }
    answer = parseFloat(answer.toFixed(2))
    if (value === answer.toString()) {
      this.score = this.score + 100;
      this.time = this.time + 60;
    } else {
      this.score = this.score - 100;
    }
    if (this.calculations.length === 5) {
      this.calculations = this.calculations.slice(1);
    }
    this.calculations.push(`${this.firstNumber}` + `${this.operator}` + `${this.secondNumber}` + '=' + `${answer}`)
    console.log(this.calculations)
  }


}
