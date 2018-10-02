import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Tidak ada server baru yang telah dibuat!';
  serverName = 'See you soon';
  serverCreated = false;
  servers = ['TestServer','TestServer 2'];

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreationStatus(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server telah dibuat!';
  }
  onUpadateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

