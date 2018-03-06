import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bid-message-form',
  templateUrl: './bid-message-form.component.html',
  styleUrls: ['./bid-message-form.component.css']
})
export class BidMessageFormComponent implements OnInit {

  constructor() { }
  
  processing = false;
  feedbackEnabled = false;
  message: any;

  @Output() onNewMessage = new EventEmitter<any>(); 
  ngOnInit() {
    
  }

  handleClickNewMessage(form) {
    this.feedbackEnabled = true
    if (form.valid) {
      this.processing = true;
      this.onNewMessage.emit(this.message)
      this.processing = false;
      this.feedbackEnabled = false;
    } else {
        this.feedbackEnabled = true;
    }
  }
}
