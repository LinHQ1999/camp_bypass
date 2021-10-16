import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudataService } from '../studata.service';
import { Student } from '../Student';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  student: Student | null = null;

  startDate: Date = new Date();
  endDate: Date = new Date();
  currentDate: Date = new Date();

  constructor(
    private studata: StudataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getStudents();

    // 计算截止日期，自动以 1 天计。
    // 起始时间进行混淆。
    this.startDate.setDate(this.currentDate.getDate() - 1);
    this.startDate.setHours(this.currentDate.getHours() - 7);
    this.endDate.setDate(this.startDate.getDate() + 2);

    // 实时更新日期
    setInterval(() => this.currentDate = new Date(), 1000);
  }

  getStudents(): void {
    this.student = this.studata.Current;
  }
}

