import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-homepage-page',
  templateUrl: './homepage-page.component.html',
  styleUrls: ['./homepage-page.component.css']
})
export class HomepagePageComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  userId;
  user;

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.userId = String(params['id']));

    this.authService 
      .me()
      .then((user) => this.user = user);

    console.log(this.userId);
  }

}
