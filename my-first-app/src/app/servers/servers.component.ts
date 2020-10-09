import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'Not created';
  serverName = "";
  serverCreated = false;
  ngOnInit(): void {
  }

  constructor(){
      setTimeout(()=>{this.allowNewServer = false;},3000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server created with name:- '+ this.serverName;
  }

  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
