import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html',
    styles:[`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent  implements OnInit{
    ngOnInit(): void {
    }

    serverId:number =  10;
    serverStatus:string = 'offline';
    userName = '';

    constructor(){
        this.serverStatus = Math.random()>0.5?'online':'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    resetUserName(){
        this.userName = '';
    }

    getColor(){
        return this.serverStatus == 'online'?'green':'red';
    }

}