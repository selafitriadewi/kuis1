import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles: [`
      .next{
        color : white;
  }
  `]
})
export class Tugas3Component implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  servers = ['TestServer','TestServer 2'];
  i=1;
  log=[];
  panggil='';


  constructor() { 
  setTimeout(()=> {
    this.allowNewServer = true;
  },2000)
}

  ngOnInit() {
  }
  onCreationStatus(){
    this.serverCreated = true;
    this.panggil='see you soon';
    this.log.push(this.i);
    this.i++;
  }
  // onUpadateServerName(event: Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}
