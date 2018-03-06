import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidMessageComponent } from './bid-message.component';

describe('BidMessageComponent', () => {
  let component: BidMessageComponent;
  let fixture: ComponentFixture<BidMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
