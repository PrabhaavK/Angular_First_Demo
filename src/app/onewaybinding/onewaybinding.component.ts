import { Component } from '@angular/core';
import { User } from './../Models/User';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent {
x:number=10;
y:number=20;
student:string ="Prabhav";
Prof:string ="Intern";
imgurl:string="D:/Angular/Angular_TypeScript/FirstAngApp/src/assets/image.jpg";
User:User={id:1,name:"Prabhav",email:"Prabhav@yash.com"};
isvalid:boolean=true;
}
