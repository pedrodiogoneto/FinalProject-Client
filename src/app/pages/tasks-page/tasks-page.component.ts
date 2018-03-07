import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  tasks: Array<any>;
  user: any;

  constructor(private tasksService:  TasksService, private authService: AuthService) { }

  ngOnInit() {
    this.tasksService
      .getList()
      .then(tasks => this.tasks = tasks);

    this.authService
    .me()
    .then(user => this.user = user);
  }

}
