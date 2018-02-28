import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  tasks: Array<any>;

  constructor(private tasksService:  TasksService) { }

  ngOnInit() {
    this.tasksService
      .getList()
      .then(tasks => this.tasks = tasks);
  }

}
