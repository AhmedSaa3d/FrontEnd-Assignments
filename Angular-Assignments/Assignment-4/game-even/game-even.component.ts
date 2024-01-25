import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-even',
  templateUrl: './game-even.component.html',
  styleUrl: './game-even.component.scss'
})
export class GameEvenComponent {
  @Input() evenNumber : number;
}
