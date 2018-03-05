import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {

  userId;
  user;
  tasks;
  activeUser;

  constructor(private usersService:  UsersService, private route: ActivatedRoute, 
    private tasksService:  TasksService, private authService: AuthService) { }
  
  ngOnInit() {
    this.route.params
      .subscribe((params) => this.userId = String(params['id']));

    this.usersService.getUser(this.userId)
      .then((user) => this.user = user);

    this.tasksService.getTaskByUser(this.userId)
      .then(tasks => this.tasks = tasks);

    this.authService.me()
      .then((activeUser) => this.activeUser = activeUser); 
      
    console.log(",ashgdf" + this.user);
    console.log("userId: " + this.userId)
    console.log("activeuser" + this.activeUser)
    
  }

}

