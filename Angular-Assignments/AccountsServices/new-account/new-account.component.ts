import { AccountsDataService } from './../services/accountsData.service';
import { Component} from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService : LoggingService,
              private accountsDataService : AccountsDataService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsDataService.onAccountAdded(accountName,accountStatus);
    // this.loggingService.loggingStatus(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
