import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-set-and-patch-value',
  templateUrl: './set-and-patch-value.component.html',
  styleUrls: ['./set-and-patch-value.component.scss']
})
export class SetAndPatchValueComponent implements OnInit {
  @ViewChild('f1') formVariableSet !: NgForm;
  @ViewChild('f2') formVariablePatch !: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  fillValueSet() {
    this.formVariableSet.form.setValue({
      label1: 'please fill',
      label2: 'please fill',
    })
  }

  fillValuePatch(){
    this.formVariablePatch.form.patchValue({
      label3: 'please fill',
    })
  }

  onSubmit() {
    console.log(this.formVariableSet.value);
    console.log(this.formVariablePatch.value);
  }

}
