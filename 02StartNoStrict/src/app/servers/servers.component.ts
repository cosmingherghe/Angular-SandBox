import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: [
    './servers.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class ServersComponent {
  allowNewServer: boolean = false;
  createServer: string = "No server created";
  serverName: string = 'As';

  constructor(){
    setTimeout(
      () => {
        this.allowNewServer = true;
      }
      ,5000);
  }

  onCreateServer() {
    this.createServer = "Server was created and added.";
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
