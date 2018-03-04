import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage-page',
  templateUrl: './homepage-page.component.html',
  styleUrls: ['./homepage-page.component.css']
})
export class HomepagePageComponent implements OnInit {

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  userId;
  user;

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.userId = String(params['id']));

    // this.usersService 
    //   .getUser(this.userId)
    //   .then((user) => this.user = user);

    console.log(this.userId);
  }

}
