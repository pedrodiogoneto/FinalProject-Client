import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {
  price: any;
  processing = false;
  feedbackEnabled = false;

  @Output() onNewBid = new EventEmitter<any>(); 
  constructor() { }

  ngOnInit() {
  }

  handleClickNewBid(form) {
    this.feedbackEnabled = true
    if (form.valid) {
      this.processing = true;
      this.onNewBid.emit(this.price)
      this.processing = false;
      this.feedbackEnabled = false;
    } else {
      this.feedbackEnabled = true;
    }
  }

}
