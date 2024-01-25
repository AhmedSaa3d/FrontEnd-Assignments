import { UsersDataService } from './../usersData.service';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-activeUsers',
  templateUrl: './activeUsers.component.html',
  styleUrls: ['./activeUsers.component.css']
})
export class ActiveUsersComponent implements OnInit , DoCheck{
  users :User[];

  constructor(private activeUsersServices : UsersDataService) { }

  ngOnInit() {
    this.users = this.activeUsersServices.usersData.filter((ele)=>{
      if(ele.status == "active")
      return ele
    })
  }

  ngDoCheck(): void {
    this.users = this.activeUsersServices.usersData.filter((ele)=>{
      if(ele.status == "active")
      return ele;
    })
  }

  changeToInActive(id : number){
    this.activeUsersServices.toggleStatus(id);
  }

}
