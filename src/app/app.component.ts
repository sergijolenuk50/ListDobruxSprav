import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { IUser, USERS } from './user';
import { IList, LISTS } from './list';
import { TodolistComponent } from "./todolist/todolist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progect2';
users: IUser[] = USERS;
lists: IList[] = LISTS;
  name ='Olenuk Sergii';
  chengeName (){
    this.name +='!';
  }
}
