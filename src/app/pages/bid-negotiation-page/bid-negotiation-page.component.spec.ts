import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidNegotiationPageComponent } from './bid-negotiation-page.component';

describe('BidNegotiationPageComponent', () => {
  let component: BidNegotiationPageComponent;
  let fixture: ComponentFixture<BidNegotiationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidNegotiationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidNegotiationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
