
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-addNewServer',
  templateUrl: './addNewServer.component.html',
  styleUrls: ['./addNewServer.component.css'],
  encapsulation: ViewEncapsulation.None

})

export class AddNewServerComponent {
  serverElements = [{type: 'server', name:'TestsServer', content: 'this is test server'}];


onServerAdded(serverData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

onBluePrintAdded(bluePrintData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    })
  }
}
