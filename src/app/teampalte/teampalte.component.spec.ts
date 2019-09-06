import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeampalteComponent } from './teampalte.component';

describe('TeampalteComponent', () => {
  let component: TeampalteComponent;
  let fixture: ComponentFixture<TeampalteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeampalteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeampalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
