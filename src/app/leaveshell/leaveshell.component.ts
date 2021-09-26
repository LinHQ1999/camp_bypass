import { Component, OnInit } from '@angular/core';
import Item from '../shell/nav/item';

@Component({
  selector: 'app-leaveshell',
  templateUrl: './leaveshell.component.html',
  styleUrls: ['./leaveshell.component.css']
})
export class LeaveshellComponent implements OnInit {
  title: string = "请假详情";
  links: Array<Item> = [];


  constructor(
  ) { }

  ngOnInit(): void {
    this.links = [
      { text: "请假信息", href: `./show`, warning: { hasIcon: true, text: "如何销假？" } },
      { text: "核验二维码", href: `./qrcode`, warning: { hasIcon: false, text: "请出示专属核验二维码，用于验证请假单真伪。" } }
    ];
  }
}