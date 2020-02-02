import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  title = 'HomeComponent';

  constructor() { }

  ngOnInit() {
  }

  countMultiplication(number1: number, number2: number): number {
    return number1 * number2;
  }

}
