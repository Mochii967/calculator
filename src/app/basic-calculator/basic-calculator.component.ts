import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-calculator',
  templateUrl: './basic-calculator.component.html',
  styleUrls: ['./basic-calculator.component.css']
})
export class BasicCalculatorComponent implements OnInit {

  public input1;
  public input2;
  public add = false;
  public sub = false;
  public mut = false;
  public div = false;
  public answer;

  constructor() { }

  ngOnInit() {
  }

  getData(event) {
    console.log(event);
  }

  read(event) {
    console.log(event);
    this.input1 = event.target.value;
    console.log(this.input1);
  }

  read2(event) {
    this.input2 = event.target.value;
  }

  operation(event) {
    console.log(event);
    console.log(event.target.value);
    if (event.target.value == "add") {
      this.add = true;
    } else if (event.target.value == "sub") {
      this.sub = true;
    } else if (event.target.value == "mut") {
      this.mut = true;
    } else if (event.target.value == "div") {
      this.div = true;
    } else {
      console.log("something went wrong");
    }
  }

  solution() {
    if (this.add == true) {
      this.answer = this.input1 + this.input2; 
    } else if (this.sub == true) {
      this.answer = this.input1 - this.input2;
    } else if (this.mut == true) {
      this.answer = this.input1 * this.input2;
    } else if (this.div == true) {
      this.answer = this.input1 / this.input2;
    } else {
      console.log("something went wrong");
    }
  }

  /*clear() {
    this.input1 = 0;
    this.input2 = 0;
    this.add = false;
    this.sub = false;
    this.mut = false;
    this.div = false;
    this.answer = 0;
  }*/

}
