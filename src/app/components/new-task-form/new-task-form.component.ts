import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {
  newTask: any;
  processing = false;
  feedbackEnabled = false;

  @Output() onNewTask = new EventEmitter<string>(); 
  constructor() { }

  ngOnInit() {
  }

  handleClickNewTask(form) {
    this.feedbackEnabled = true
    if (form.valid) {
      this.processing = true;
      this.onNewTask.emit(this.newTask)
      this.processing = false;
      this.feedbackEnabled = false;
    } else {
      this.feedbackEnabled = true;
    }
  }

}