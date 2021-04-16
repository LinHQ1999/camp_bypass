import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudataService} from '../studata.service';
import {Student} from '../Student';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  students: Student | undefined;

  startDate:Date = new Date();
  endDate:Date | undefined;
  currentDate:Date = new Date();

  constructor(private studata: StudataService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getStudents();

    // 计算截止日期，自动以 3 天计。
    this.startDate.setDate(this.startDate.getDate() + 3);

    // 实时更新日期
    setInterval(() => this.currentDate = new Date(), 1000);
  }

  getStudents(): void {
    const sno: string | null = this.route.snapshot.paramMap.get("sno");
    this.studata.getStudents()
      .subscribe(stus =>
        this.students = stus.find(stu => stu.sno === sno));
  }
}

