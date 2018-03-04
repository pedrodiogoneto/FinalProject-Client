import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bids-list',
  templateUrl: './bids-list.component.html',
  styleUrls: ['./bids-list.component.css']
})
export class BidsListComponent implements OnInit {

  constructor() { }

  @Input() task: any;
  ngOnInit() {
  }

}
