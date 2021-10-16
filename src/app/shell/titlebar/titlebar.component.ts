import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent {
  @Input() iconPath: string = "assets/ok.png";
  @Input() title: string = "请假详情";

  constructor() {
  }
}
