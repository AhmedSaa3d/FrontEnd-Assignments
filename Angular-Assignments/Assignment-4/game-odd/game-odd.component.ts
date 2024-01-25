import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-odd',
  templateUrl: './game-odd.component.html',
  styleUrl: './game-odd.component.scss'
})
export class GameOddComponent {
  @Input() oddNumber : number;

}
