import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // template:`multi html code here named inline template`,

  })

export class ServerComponent {
  serverId : number = 15;
  serverStatus : string = 'closed Now';
  disableServer: boolean = false;
  serverName : string = "No Name Yet";

  constructor(){
  }
  getServerStatus(){
    return this.serverStatus;
  }
  onClick() {
      this.serverId = this.serverId+1;
    }

    changeServerName(event: Event) {
      // console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
      }
      getBackColor() {
        return this.serverName.length % 2 == 0 ? 'white' : '#333';
      }
      getColor(){
        return this.serverName.length % 2 == 0 ? '#2ecc71' : 'white';
      }
}
