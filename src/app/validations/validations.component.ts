import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.scss']
})
export class ValidationsComponent implements OnInit {

  @ViewChild('f') formVariable !: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formVariable);
  }

}
