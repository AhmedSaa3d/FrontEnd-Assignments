import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataBining',
  templateUrl: './dataBining.component.html',
})
export class DataBiningComponent implements OnInit {

  userName : string = "";

  constructor() { }

  ngOnInit() {
  }
  onBtnClicked(){
    this.userName = "";
  }
}
