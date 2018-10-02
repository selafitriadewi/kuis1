import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewUser = false;
  UserCreationStatus = 'Tidak ada server baru yang telah dibuat!';
  UserName: String = '';

  constructor() { 
    setTimeout(()=> {
      this.allowNewUser = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreationStatus(){
    this.UserCreationStatus = 'username telah dibuat!';
  }
  onUpadateServerName(event: Event){
    this.UserName = (<HTMLInputElement>event.target).value;
  }
  onReset(){
    this.UserName='';
  }

}
