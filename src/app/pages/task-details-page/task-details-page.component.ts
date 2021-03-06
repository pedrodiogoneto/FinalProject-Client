import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-task-details-page',
  templateUrl: './task-details-page.component.html',
  styleUrls: ['./task-details-page.component.css']
})
export class TaskDetailsPageComponent implements OnInit {

  constructor(private authService: AuthService, private tasksService: TasksService, private route: ActivatedRoute, private router: Router) { }

  taskId;
  task;
  bid;
  user;

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.taskId = String(params['id']));

    this.tasksService 
      .getTask(this.taskId)
      .then((task) => {
        this.task = task;
        console.log(task);
      });

    this.authService
      .me()
      .then((user) => this.user = user); 
  }

  newBid(event) {
    this.tasksService.createNewBid(event, this.task)
      .then((bid) => {
        this.bid = bid;
        this.router.navigate(['/']);
      });
  }
}

