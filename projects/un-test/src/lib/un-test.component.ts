import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-UnTest',
  template: `
    <p>
      un-test works!
    </p>
  `,
  styles: []
})
export class UnTestComponent implements OnInit {

  title = 'UnTestComponent';
  
  constructor() { }

  ngOnInit() {
  }

}
