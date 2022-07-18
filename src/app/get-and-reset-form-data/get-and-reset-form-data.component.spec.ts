import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAndResetFormDataComponent } from './get-and-reset-form-data.component';

describe('GetAndResetFormDataComponent', () => {
  let component: GetAndResetFormDataComponent;
  let fixture: ComponentFixture<GetAndResetFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAndResetFormDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAndResetFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
