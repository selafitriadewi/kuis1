import { Component, OnInit } from '@angular/core';
import {Mahasiswa} from '../shared/mahasiswa';
@Component({
  selector: 'app-kuis1',
  templateUrl: './kuis1.component.html',
  styleUrls: ['./kuis1.component.css']
  
})
export class Kuis1Component implements OnInit {
  nim='';
  nama='';
  kelas='';
  daftarMhs:Mahasiswa[] = [];
  mhs;
  constructor() { }

  ngOnInit() {
  }

    tambahMhs(){
      this.mhs = new Mahasiswa(this.nim, this.nama, this.kelas);
      this.daftarMhs.push(this.mhs);
      this.nim='';
      this.nama='';
      this.kelas='';
    }
}
