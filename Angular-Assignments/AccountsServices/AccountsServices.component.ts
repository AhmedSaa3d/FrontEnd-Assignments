import { AccountsDataService } from './services/accountsData.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-AccountsServices',
  templateUrl: './AccountsServices.component.html',
  styleUrls: ['./AccountsServices.component.css'],
  providers: [AccountsDataService]
})
export class AccountsServicesComponent implements OnInit {
  accounts : {name: string, status : string}[] =[];

  constructor(private AccountsDataService :AccountsDataService) {}

  ngOnInit() {
    this.accounts = this.AccountsDataService.accounts;
  }



}
