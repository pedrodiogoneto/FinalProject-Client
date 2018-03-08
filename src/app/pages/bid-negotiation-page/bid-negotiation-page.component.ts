import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { error } from 'util';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-bid-negotiation-page',
  templateUrl: './bid-negotiation-page.component.html',
  styleUrls: ['./bid-negotiation-page.component.css']
})
export class BidNegotiationPageComponent implements OnInit {
  
  // @Output() i: any; 
  constructor(private tasksService: TasksService, private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  taskId: any;
  bidId: any;
  bid: any;
  user: any;
  task: any;
  price: any;
  processing = false;
  feedbackEnabled = false;

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.taskId = String(params['taskId']);
      this.bidId = String(params['bidId']);
      this.tasksService
        .getTask(this.taskId)
        .then((task: any) => {
          this.task = task;
          this.bid = task.bids.find((bid) => bid._id === this.bidId) 
        });
    });


    this.authService
      .me()
      .then((user) => this.user = user); 
  }

  newMessage(event) {
    this.tasksService.createNewMessage(event, this.taskId, this.bidId)
      .then((bid) => {
        this.bid = bid;
        window.location.reload();
      });
  }

  aceptTask() {
    this.tasksService.onAceptTask(this.taskId,this.bidId);
    // .then((task) => {
    //   this.task = task;
    window.location.reload();
    })
  };



}
