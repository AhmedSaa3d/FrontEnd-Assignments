import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrl: './cookpit.component.scss'
})
export class CookpitComponent {
  @Output('serverCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bPCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('inputContent',{static:true}) inputContent :ElementRef;

  onAddServer(serverName : HTMLInputElement) {
    // this.serverCreated.emit({
    //   serverName : serverName.value,
    //   serverContent : this.newServerContent
    // });
    this.serverCreated.emit({
      serverName : serverName.value,
      serverContent : this.inputContent.nativeElement.value
    })
  }

  onAddBlueprint(serverName : HTMLInputElement) {
    // this.bluePrintCreated.emit({
    //   serverName: serverName.value,
    //   serverContent: this.newServerContent
    // })
    this.bluePrintCreated.emit({
      serverName : serverName.value,
      serverContent : this.inputContent.nativeElement.value
    })
  }
}
