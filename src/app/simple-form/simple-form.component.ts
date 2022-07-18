import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formVariable : NgForm){
    console.log(formVariable.value);

  }
}
