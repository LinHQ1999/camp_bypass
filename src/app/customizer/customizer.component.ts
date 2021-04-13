import { Component, OnInit } from '@angular/core';
import {StudataService} from '../studata.service';
import {Student} from '../Student';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.css']
})
export class CustomizerComponent implements OnInit {
  students: Student[] = []

  constructor(private studataService:StudataService) { }

  ngOnInit(): void {
    this.studataService.getStudents()
    .subscribe(stu => this.students = stu);
  }

}
