import { Component } from '@angular/core';
import { Server } from '../entity/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  servers: Server[] = [
    new Server("Server 1", "Back End", false),
    new Server("Server 2", "Front End", true)
  ];
}
