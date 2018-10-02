import { Component, OnInit } from '@angular/core';
import {Mahasiswa} from '../shared/mahasiswa';
@Component({
  selector: 'app-week5',
  templateUrl: './week5.component.html',
  styleUrls: ['./week5.component.css']
})
export class Week5Component implements OnInit {
  nim='';
  nama='';
  alamat='';
  daftarMhs:Mahasiswa[] = [];
  mhs;

  constructor() { }

  ngOnInit() {
  }

    tambahMhs(){
      this.mhs = new Mahasiswa(this.nim, this.nama, this.alamat);
      this.daftarMhs.push(this.mhs);
      this.nim='';
      this.nama='';
      this.alamat='';
    }
}
