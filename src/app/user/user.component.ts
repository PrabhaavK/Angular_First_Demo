import { User } from './../Models/User';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
User:User={id:1,name:"Prabhav",email:"Prabhav@yash.com"}
}
