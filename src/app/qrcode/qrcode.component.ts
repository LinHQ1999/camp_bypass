import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  now: Date = new Date();
  sno: string = "";

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sno = <string>this.router.snapshot.paramMap.get("sno");
    setInterval(() => {
      this.now = new Date();
    }, 1000)
  }

}
