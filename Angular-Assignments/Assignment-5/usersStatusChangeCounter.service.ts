import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersStatusChangeCounterService {
activeToInactiveCounter = 0;
inActiveToactiveCounter = 0;
constructor() { }

incrementActiveToInActive(){
  this.activeToInactiveCounter++;
  console.log("ActiveToInActive : " + this.activeToInactiveCounter);

}

incrementinActiveToActive(){
  this.inActiveToactiveCounter++;
  console.log("inActiveToActive : " + this.inActiveToactiveCounter);
}
}
