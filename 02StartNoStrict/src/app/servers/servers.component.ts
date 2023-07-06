import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: [
    './servers.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class ServersComponent implements OnInit {
  username: string = '';
  allowNewServer: boolean = false;
  serverName = '';
  isServerCreated: boolean = false;
  createServerInfo: string = "No server created";
  servers = ['A','B'];

  constructor(){
    setTimeout(
      () => {
        this.allowNewServer = true;
      }
      ,2000
    );
  }

  ngOnInit():void {  }

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
  } 
}