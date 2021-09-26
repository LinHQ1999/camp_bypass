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
    title: string = "签到";
    now: Date = new Date();
    student: Student | null = null;


    constructor(
        private studataService: StudataService,
    ) {}

    ngOnInit(): void {
        this.student = this.studataService.Current;
    }
}
