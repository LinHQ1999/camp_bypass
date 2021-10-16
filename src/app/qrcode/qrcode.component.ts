import { Component, OnInit } from '@angular/core';
import { StudataService } from '../studata.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  now: Date = new Date();
  sno: string = "";

  constructor(private studata:StudataService) { }

  ngOnInit(): void {
    this.sno = this.studata.Current?.sno ?? "";
    setInterval(() => {
      this.now = new Date();
    }, 1000)
  }

}
