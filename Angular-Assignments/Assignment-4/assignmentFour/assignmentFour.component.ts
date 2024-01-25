import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignmentFour',
  templateUrl: './assignmentFour.component.html',
  styleUrls: ['./assignmentFour.component.css']
})
export class AssignmentFourComponent implements OnInit {

  oddNumbers : number[] = [];
  evenNumbers: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onfired(firedNumber : number) {
    if(firedNumber % 2 ===0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }

}
