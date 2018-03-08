import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bid-message',
  templateUrl: './bid-message.component.html',
  styleUrls: ['./bid-message.component.css']
})
export class BidMessageComponent implements OnInit {

  @Input() negotiation: any;
  @Input() task: any;
  @Input() bid: any;
  constructor() { }

  ngOnInit() {
  }
}
