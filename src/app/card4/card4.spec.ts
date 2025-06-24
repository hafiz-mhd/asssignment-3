import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card4 } from './card4';

describe('Card4', () => {
  let component: Card4;
  let fixture: ComponentFixture<Card4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
