import { Component, OnInit } from '@angular/core';
import { StudataService } from '../studata.service';
import { Student } from '../Student';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  now: Date = new Date();
  sno: string = "";
  student: Student | undefined;

  constructor(private studata:StudataService) { }

  ngOnInit(): void {
    this.student = this.studata.Current || undefined;
    setInterval(() => {
      this.now = new Date();
    }, 1000)
  }

}
