import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignmentSeven',
  templateUrl: './assignmentSeven.component.html',
  styleUrls: ['./assignmentSeven.component.css']
})
export class AssignmentSevenComponent implements OnInit {

  myForm : FormGroup;
  finished : boolean = false;
  myformFinished = {
    projName : '',
    mailName : '',
    projStatus : ''
  }

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'projectName' : new FormControl(null,[Validators.required, this.checkProjName.bind(this)]),
      'mailName' : new FormControl(null,[Validators.required, Validators.email], this.checkEmailName),
      'projStatus' : new FormControl('stable')
    })
  }
  onSubmitFunc() {
    this.finished = true;
    this.myformFinished.projName = this.myForm.value.projectName;
    this.myformFinished.mailName = this.myForm.value.mailName;
    this.myformFinished.projStatus = this.myForm.value.projStatus;
  }

  checkProjName(control : FormControl): {[s: string]: Boolean}{
    if(control.value === "Test")
      return {'Invalid Porject Name': true};
    return null;
  }

  checkEmailName(control : FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(() => {
        if(control.value === "Test@gmail.com"){
          resolve({'Invalid Email Name' : true})
        }else{
          resolve(null);
        }
      }, 2500);
    });
    return promise;
  }



}
