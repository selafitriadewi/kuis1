import { Component } from '@angular/core';

@Component({
    selector: 'app-server',/*ini adalah selector tag*/
    // selector: '[app-server]',//proprty selector
    // selector: '.app-server',//class selector
    templateUrl: './server.component.html',
    // styleUrls: ['./server.component.css']
    styles:[`
        .online{
            color:white;
        }
        `]
})

export class ServerComponent {
    serverID: number = 10;
    serverStatus = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ?'online':'offline';
    }

    getServerStatus (){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red' ;
    }
}