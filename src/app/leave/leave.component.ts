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
  student: Student | undefined;

  startDate: Date = new Date();
  endDate: Date = new Date();
  currentDate: Date = new Date();

  leaveReason: string | undefined;

constructor(
    private studata:StudataService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getStudents();
    this.getReason();

    // 计算截止日期，自动以 3 天计。
    this.endDate.setDate(this.startDate.getDate() + 3);

    // 实时更新日期
    setInterval(() => this.currentDate = new Date(), 1000);
  }

  getStudents(): void {
    const sno: string | null = this.route.snapshot.paramMap.get("sno");
    this.studata.getStudents()
      .subscribe(stus =>
        this.student = stus.find(stu => stu.sno === sno));
  }

  getReason(): void {
    if (this.student?.reasons !== undefined) {
      const randIndex = Math.floor(Math.random() * this.student?.reasons.length)
      this.leaveReason = this.student.reasons[randIndex];
    } else {
      this.leaveReason = "去市区买东西，需要暂时离校";
    }
  }
}

