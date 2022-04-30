import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() show = false;
  @Input() title = "未传入标题";
  @Output() close = new EventEmitter<boolean>()

  constructor() { }

  handleClose() {
    // console.log("emit")
    this.close.emit(true);
  }

  ngOnInit(): void {
  }

}
