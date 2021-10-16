import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {StudataService} from '../studata.service';
import {Student} from '../Student';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.css']
})
export class CustomizerComponent implements OnInit {
  students: Student[] = []

  constructor(
      private studataService:StudataService,
      private titleService:Title
  ) { }

  ngOnInit(): void {
    this.studataService.getStudents()
    .subscribe(stu => this.students = stu);
  }

  renewState(title:string, user:Student):void{
      this.titleService.setTitle(title);
      this.studataService.Current = user;
  }

}
