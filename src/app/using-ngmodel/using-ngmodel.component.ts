import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-using-ngmodel',
  templateUrl: './using-ngmodel.component.html',
  styleUrls: ['./using-ngmodel.component.scss']
})
export class UsingNgmodelComponent implements OnInit {
  @ViewChild('f') formVariable !: NgForm;
  labelVariable="first value";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
   console.log(this.formVariable);
  }


}
