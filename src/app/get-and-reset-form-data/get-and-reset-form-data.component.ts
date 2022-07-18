import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Model{
  label1:string,
  label2:string
}

@Component({
  selector: 'app-get-and-reset-form-data',
  templateUrl: './get-and-reset-form-data.component.html',
  styleUrls: ['./get-and-reset-form-data.component.scss']
})
export class GetAndResetFormDataComponent implements OnInit {
  isFormSubmitted : boolean = false;
  @ViewChild('f') formVariable !: NgForm;

  model !: Model;
  constructor() { }
  ngOnInit(): void {
    this.model ={
      label1: '',
      label2: ''
    };
  }
  onSubmit() {
    this.isFormSubmitted = true;
    this.model.label1=this.formVariable.value.label1;
    this.model.label2=this.formVariable.value.label2;
    this.formVariable.reset();
  }
}
