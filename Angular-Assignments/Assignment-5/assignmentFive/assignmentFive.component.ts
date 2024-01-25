import { Component, OnInit } from '@angular/core';

import { UsersDataService } from '../usersData.service';
import { UsersStatusChangeCounterService } from '../usersStatusChangeCounter.service';

@Component({
  selector: 'app-assignmentFive',
  templateUrl: './assignmentFive.component.html',
  styleUrls: ['./assignmentFive.component.css'],
  providers: [UsersDataService]
})
export class AssignmentFiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
