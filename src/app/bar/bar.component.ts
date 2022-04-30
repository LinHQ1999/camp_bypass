import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../Student';

@Component({
  animations: [
    trigger("showInfo", [
      state("show", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(100)]),
      transition(":leave", [animate(100, style({ opacity: 0 }))]),
    ])
  ],
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() currentDate: Date | undefined;
  @Input() student: Student | undefined;
  showInfo = "hide";
  title = "个人信息";

  constructor() { }

  toggleInfo(show: string) {
    // console.log(this.showInfo, "-->", show)
    this.showInfo = show
  }

  ngOnInit(): void {
  }

}
