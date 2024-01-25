import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent {
  @Input('serElement') element : {type: string, name:string, content: string };
}
