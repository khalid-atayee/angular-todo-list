import { TASKS } from './../../moch-tasks';
import { Task } from 'src/app/task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks :Task[]=TASKS

  constructor() { }

  ngOnInit(): void {
  }

}
