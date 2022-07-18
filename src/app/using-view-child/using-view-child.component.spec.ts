import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingViewChildComponent } from './using-view-child.component';

describe('UsingViewChildComponent', () => {
  let component: UsingViewChildComponent;
  let fixture: ComponentFixture<UsingViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingViewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
