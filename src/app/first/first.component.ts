import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  textm :string = "Good i am here !";
  list : number[] = [1,2,3,4];
  isGreen :boolean = false;
  cash : number = 4532.50;

  // onClick(r:string){
    
  // console.log('Clicked !!');
  // console.log(r);
  // this.text = r;
    
  // }

  
  // onClick(){
    
  //   console.log('Clicked !!');
      
  //   }

// this fuction is not working
   onEnterKeyPress(eventm: any) {
    if (eventm.key === 'Enter') {
      // Assign the value of the input field to textm
      this.textm = (<HTMLInputElement>eventm.target).value;
    }
    console.log(eventm)
  }
  

}
