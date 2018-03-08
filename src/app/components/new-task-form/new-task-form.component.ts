import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {

  title: any;
  location: any;
  category: any;
  budget: any;
  image: any;
  processing = false;
  feedbackEnabled = false;

  @Output() onNewTask = new EventEmitter<object>(); 
  constructor() { }

  ngOnInit() {
  }

  handleClickNewTask(form) {
    this.feedbackEnabled = true
    if (form.valid) {
      const data = {
        title: this.title,
        location: this.location,
        category: this.category,
        budget: this.budget,
        image: this.image
      }
      this.processing = true;
      this.onNewTask.emit(data)
      this.processing = false;
      this.feedbackEnabled = false;
    } else {
      this.feedbackEnabled = true;
    }
  }

}