import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-new-task-page',
  templateUrl: './new-task-page.component.html',
  styleUrls: ['./new-task-page.component.css']
})
export class NewTaskPageComponent implements OnInit {

  tasks;
  constructor(private router: Router, private tasksService:  TasksService) { }

  ngOnInit() {
  }

  createNewTask(event) {
    this.tasksService.createNew(event)
      .then((task) => this.tasks = task)
      .then(() => { return this.router.navigate(['/'] });

  }

}
