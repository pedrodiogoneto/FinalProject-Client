import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-full-details',
  templateUrl: './task-full-details.component.html',
  styleUrls: ['./task-full-details.component.css']
})
export class TaskFullDetailsComponent implements OnInit {

  @Input() task: any;
  constructor() { }

  ngOnInit() {
  }

}
