import { Component } from '@angular/core';

@Component({
  selector: 'app-bulit-in-directives',
  templateUrl: './bulit-in-directives.component.html',
  styleUrl: './bulit-in-directives.component.scss'
})
export class BulitInDirectivesComponent {
  showClass : boolean = true;
  logsArr : number[] = [];
  incrementToggle : number = 0;

  toggleP(){
    this.showClass = !this.showClass;
    this.incrementToggle++;
    this.logsArr.push(this.incrementToggle);
    console.log(this.logsArr)
  }
}
