import { Component } from '@angular/core';
import { Server } from '../entity/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  newServerName: string;
  newServerDescription: string;
  isBlueprint: boolean;
  servers: Server[] = [
    new Server("Server 1", "Back End", false),
    new Server("Server 2", "Front End", true)
  ];

  onAddServer() {
    this.servers.push({
      name: this.newServerName,
      description: this.newServerDescription,
      isBlueprint: false
    });
  }
  onAddBlueprint() {
    this.servers.push({
      name: this.newServerName,
      description: this.newServerDescription,
      isBlueprint: true
    });
  }
}
