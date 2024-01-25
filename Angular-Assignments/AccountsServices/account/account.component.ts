import { AccountsDataService } from './../services/accountsData.service';
import { Component, Input } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService : LoggingService,
              private accountsDataService : AccountsDataService){}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsDataService.onStatusChanged(this.id,status);
    // this.loggingService.loggingStatus(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
