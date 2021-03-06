import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() usertasks: any;
  @Input() user: any;
  @Input() task: any;

  constructor() { }

  ngOnInit() {
    
    console.log(this.task);
    console.log(this.user);
    }

}
