import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-asignmentSix',
  templateUrl: './asignmentSix.component.html',
  styleUrls: ['./asignmentSix.component.css']
})
export class AsignmentSixComponent {
  @ViewChild('myform') myForm : NgForm;
  disableSubmit : boolean = true;
  advanced: string = "advanced";
  formObjedts : {
    email : string,
    password : string,
    subscription : string
  } = {
    email : "",
    password : "",
    subscription : ""
  }
displayData: boolean = false;


  onSubmit() {
    // console.log(this.myForm.value.email)
    this.displayData = true;
    this.formObjedts.email = this.myForm.value.email;
    this.formObjedts.password = this.myForm.value.password;
    this.formObjedts.subscription = this.myForm.value.subscriptionType;
    console.log("yes");
  }


}
