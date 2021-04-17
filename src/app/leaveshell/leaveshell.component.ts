import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaveshell',
  templateUrl: './leaveshell.component.html',
  styleUrls: ['./leaveshell.component.css']
})
export class LeaveshellComponent implements OnInit {
  sno:string|undefined
  
  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.sno = <string>this.route.snapshot.paramMap.get("sno");
  }
}