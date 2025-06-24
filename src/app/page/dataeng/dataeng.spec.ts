import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dataeng } from './dataeng';

describe('Dataeng', () => {
  let component: Dataeng;
  let fixture: ComponentFixture<Dataeng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dataeng]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dataeng);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
