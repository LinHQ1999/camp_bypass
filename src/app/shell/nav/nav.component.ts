import { Component, Input, OnInit } from '@angular/core';
import Item from './item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input()
  links: Array<Item> = [];
  active: number = 0;

  constructor() { }

  switch(index: number) {
    this.active = index;
  }
}
