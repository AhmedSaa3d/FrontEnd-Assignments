import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningAlert',
  template: `
  <p>
    warningAlert works!
  </p>
  `,
  styles: [`
  p{
    text-align: center;
    color:red;
    background-color: #333;
    padding: 20px;
    font-size: 3rem;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
  }`]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
