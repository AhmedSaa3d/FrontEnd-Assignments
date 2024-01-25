import { UsersStatusChangeCounterService } from './usersStatusChangeCounter.service';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  usersData : User[] = [
    {id : 0 , name : "Max", status : "active"},
    {id : 1 , name : "Anna", status : "active"},
    {id : 2 , name : "Chris",status : "inActive"},
    {id : 3 , name : "Manu",status : "inActive"},
    {id : 4 , name : "Ahmed",status : "active"},
    {id : 5 , name : "Mahmoud",status : "active"},
  ];

constructor(private usersStatusChangeCounterService : UsersStatusChangeCounterService) { }

  toggleStatus(id : number){
    const newStatus = this.getNewStatus(id);
    this.usersData[id].status = newStatus;
  }

  getNewStatus(id : number): string{
    const currentStatus : string = this.usersData[id].status;
    if(currentStatus == "active") {
      this.usersStatusChangeCounterService.incrementActiveToInActive();
      return "inActive";
     }else{
      this.usersStatusChangeCounterService.incrementinActiveToActive();
      return "active";
     }
  }

}
