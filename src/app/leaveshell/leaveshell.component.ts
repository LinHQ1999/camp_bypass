import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudataService } from '../studata.service';

@Component({
  selector: 'app-leaveshell',
  templateUrl: './leaveshell.component.html',
  styleUrls: ['./leaveshell.component.css']
})
export class LeaveshellComponent implements OnInit {
  sno: string = "";
  simple: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private studata: StudataService
  ) { }

  ngOnInit(): void {
    this.sno = <string>this.route.snapshot.paramMap.get("sno");
    // 不要分开写，因为是异步中的操作
    this.studata.getStudents()
      .subscribe(stu => this.simple = stu.find(stu => stu.sno === this.sno)?.simple)
  }
}