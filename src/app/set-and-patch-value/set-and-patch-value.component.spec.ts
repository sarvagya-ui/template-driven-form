import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAndPatchValueComponent } from './set-and-patch-value.component';

describe('SetAndPatchValueComponent', () => {
  let component: SetAndPatchValueComponent;
  let fixture: ComponentFixture<SetAndPatchValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetAndPatchValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAndPatchValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
