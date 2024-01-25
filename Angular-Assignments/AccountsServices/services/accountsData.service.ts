import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsDataService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  constructor(private loggingService : LoggingService) { }

  onAccountAdded(name: string, status: string) {
    this.accounts.push({name : name, status : status});
    this.loggingService.loggingStatus(status);
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.loggingStatus(newStatus);
  }

}
