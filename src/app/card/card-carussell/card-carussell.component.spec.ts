import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarussellComponent } from './card-carussell.component';

describe('CardCarussellComponent', () => {
  let component: CardCarussellComponent;
  let fixture: ComponentFixture<CardCarussellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCarussellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCarussellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
