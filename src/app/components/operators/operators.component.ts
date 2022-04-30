import { Component, Output, OnInit, EventEmitter, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  @Input() rollAgain: any;
  operators = ['+', '-', '*', '/'];
  index: number = 1;
  selected: string = "+";
  @Output() ops = new EventEmitter<string>()
  constructor() { }


  ngOnInit(): void {
    this.rollAgain = 1
    this.getRandomOperator();
    setTimeout(() => this.rollAgain = 0, 300)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.rollAgain > 0) {
      this.getRandomOperator();
      setTimeout(() => this.rollAgain = 0, 300)
    }
  }

  getRandomOperator() {
    this.index = Math.floor(Math.random() * 4);
    this.selected = this.operators[this.index];
    this.ops.emit(this.selected)
  }
}
