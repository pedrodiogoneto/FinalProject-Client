import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidMessageFormComponent } from './bid-message-form.component';

describe('BidMessageFormComponent', () => {
  let component: BidMessageFormComponent;
  let fixture: ComponentFixture<BidMessageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidMessageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
