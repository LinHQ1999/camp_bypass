import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudataService} from '../studata.service';
import {Student} from '../Student';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  now: Date = new Date();
  student: Student|undefined;


  constructor(
    private studataService: StudataService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void{
    const sno:string|null = this.route.snapshot.paramMap.get("sno");
    this.studataService.getStudent(<string>sno)
      .subscribe(stus => this.student = stus);
  }

}
