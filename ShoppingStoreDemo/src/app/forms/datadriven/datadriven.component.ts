import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-datadriven',
  templateUrl: './datadriven.component.html',
  styles: []
})
export class DatadrivenComponent implements OnInit {
  user={
    name:"hello",
    email: "hello@gmail.com",
    password: "poioio"
  }
  myForm: FormGroup;
  constructor() {
    this.myForm=new FormGroup(
      {
        username: new FormControl(),
        email: new FormControl(),
        password: new FormControl()
      }
    );
   }

  ngOnInit() {
  }
onSubmit(){
    console.log(this.myForm);
  }
}
