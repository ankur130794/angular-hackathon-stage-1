import { Component } from '@angular/core';
// import './app.component.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app';
  random:any;
  state:any;
  id:any;
  count:number=0;
  
  temp:any;
  DropdownVar = 0;
  
  onSelect(x){
   this.DropdownVar = x;
   console.log(x);
  }

  rand(number:any):any{
  console.log(number);
  this.state='state'+number;
  this.id=number;
  console.log(this.state);
  this.random=(Math.floor((Math.random( ) *10)+1)%4)+1;
  console.log(this.random);
   
  }

  change(btn,number:any)
  { 
    if(number==this.temp)
    this.count +=1;


    this.state='but1';
    var property=document.getElementById(this.state);
    property.style.background="black";
    this.state='but2';
    var property=document.getElementById(this.state);
    property.style.background="black";
    this.state='but3';
    var property=document.getElementById(this.state);
    property.style.background="black";
    this.state='but4';
    var property=document.getElementById(this.state);
    property.style.background="black";
    this.state='but'+this.random;
    var property=document.getElementById(this.state);
    property.style.background="white";
    console.log(this.count);

    this.temp = this.random;


  }


  
}
