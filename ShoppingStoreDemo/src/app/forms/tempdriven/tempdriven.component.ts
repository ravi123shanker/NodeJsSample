import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempdriven',
  templateUrl: './tempdriven.component.html',
  styles: []
})
export class TempdrivenComponent implements OnInit {
  user={
    name:"hello",
    email: "hello@gmail.com",
    password: "poioio"
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form){
    console.log(form);
  }
}
