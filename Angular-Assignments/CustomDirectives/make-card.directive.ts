import { Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[appMakeCard]'
})
export class MakeCardDirective implements OnInit{
  @HostBinding('style.transition') transition : string = '0.5s';
  @Input('defaultColor') defaultColor : string = '#000';
  @Input('playerColor') playerColor : string = "red";


  constructor(private element : ElementRef, private renderStyle : Renderer2) { }

  ngOnInit(){
    this.changeStyle(this.defaultColor);
  }
  @HostListener('mouseenter') mouseover(eventData : Event){
    this.changeStyle(this.playerColor);
  }
  @HostListener('mouseleave') mouseleave(eventData : Event){
    this.changeStyle(this.defaultColor);
  }
  changeStyle(color : string){

    this.renderStyle.setStyle(this.element.nativeElement,'color',color);
    this.renderStyle.setStyle(this.element.nativeElement,'border',`3px solid ${color}`);
    this.renderStyle.setStyle(this.element.nativeElement,'background-color','transpaernt');
    this.renderStyle.setStyle(this.element.nativeElement,'box-shadow',`0 10px 0 ${color}`);
    // this.transition = '1s'
  }
}

