import { UsersDataService } from '../usersData.service';
import { User } from './../user';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-inActiveUsers',
  templateUrl: './inActiveUsers.component.html',
  styleUrls: ['./inActiveUsers.component.css']
})
export class InActiveUsersComponent implements OnInit , DoCheck{
  users :User[];

  constructor(private activeUsersServices : UsersDataService) { }

  ngOnInit() {
    this.users = this.activeUsersServices.usersData.filter((ele)=>{
      if(ele.status == "inActive")
      return ele
    })
  }

  ngDoCheck(): void {
    this.users = this.activeUsersServices.usersData.filter((ele)=>{
      if(ele.status == "inActive")
      return ele;
    })
  }

  changeToActive(id : number){
    this.activeUsersServices.toggleStatus(id);
  }

}
