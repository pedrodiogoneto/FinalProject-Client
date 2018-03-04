import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details-page',
  templateUrl: './task-details-page.component.html',
  styleUrls: ['./task-details-page.component.css']
})
export class TaskDetailsPageComponent implements OnInit {

  constructor(private tasksService: TasksService, private route: ActivatedRoute) { }

  taskId;
  task;

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.taskId = String(params['id']));

    this.tasksService 
      .getTask(this.taskId)
      .then((task) => this.task = task);

  }

}
