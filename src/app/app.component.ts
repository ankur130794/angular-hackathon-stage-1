import { Component} from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    timeOutFlag:boolean=false; // if true than game timeout else game running;
    // gameStarted:boolean=false;
    timeOutStarted:boolean=false; //if false than game timer not yet started
    rand:number =1;
    score:number=0;

    val:number=1;
    idbut:string='but1';
    
    numbers;
    
    constructor(){
      this.numbers = Observable.timer(500,500); // Call after 500 second.. Please set your time
      this.numbers.subscribe(time =>{
        // this.GenerateRandFour();
        // console.log(this.rand);
        this.changeColors(this.val,this.idbut);
        // console.log(this.val,this.idbut);
      });
    }
    

    StartTimeout(){
      setTimeout(() => {
        this.timeOutFlag=true;
      }, 9000);
    }

    GenerateRandFour() {
      this.rand = (Math.floor((Math.random( ) *10)+1)%4)+1;  
    }

    changeColors(quadValue:number,id:string){
      document.getElementById(id).style.background="#000";
      this.GenerateRandFour();
      let elementId = this.rand.toString();
      console.log("elementId"+elementId);
      elementId = "but" + elementId;
      document.getElementById(elementId).style.background="#fff";
      this.val=this.rand;
      this.idbut=elementId;  
    }
    

    QuadrantClick(quadValue:number,id:string){
      if(this.timeOutStarted===false){
        this.StartTimeout(); //starts game timer on first function invocation;
        this.timeOutStarted=true;
        console.log("timeoutStarted");
      }
      if(this.timeOutFlag===false){
        if(quadValue==this.rand){
          this.score++;
          console.log("score"+this.score);
          this.changeColors(quadValue,id);
        }
        else{
          console.log("invalid move")
        }
      }
      else{
          console.log("finalscore"+this.score);
          console.log('your 90 secs are over');
          this.numbers=null;
      }

    }

}
