import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-using-view-child',
  templateUrl: './using-view-child.component.html',
  styleUrls: ['./using-view-child.component.scss']
})
export class UsingViewChildComponent implements OnInit {

  //ViewChild acts same as in js getElementById
  @ViewChild('f') formVariable !: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  checkData(){
    console.log(this.formVariable);
  }

  onSubmit(){
   console.log(this.formVariable);
  }

}
