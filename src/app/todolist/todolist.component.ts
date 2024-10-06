import { Component, Input } from '@angular/core';
import { IList } from '../list';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  @Input()
  list?: IList;
}
