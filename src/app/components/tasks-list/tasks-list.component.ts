import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TasksPageComponent } from '../../pages/tasks-page/tasks-page.component'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @Input() tasks: any;
  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
