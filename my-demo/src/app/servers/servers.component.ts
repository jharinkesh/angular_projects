import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus = 'No server created';
  serverName='Test server'
  serverCreated = false;
  servers = ['server 1','server 2']
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true
    },1000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server got created, name:'+this.serverName
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
