import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingNgmodelComponent } from './using-ngmodel.component';

describe('UsingNgmodelComponent', () => {
  let component: UsingNgmodelComponent;
  let fixture: ComponentFixture<UsingNgmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingNgmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
