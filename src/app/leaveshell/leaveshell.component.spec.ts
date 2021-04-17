import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveshellComponent } from './leaveshell.component';

describe('LeaveshellComponent', () => {
  let component: LeaveshellComponent;
  let fixture: ComponentFixture<LeaveshellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveshellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
