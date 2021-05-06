import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoffeeDialogComponent } from './new-coffee-dialog.component';

describe('NewCoffeeDialogComponent', () => {
  let component: NewCoffeeDialogComponent;
  let fixture: ComponentFixture<NewCoffeeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCoffeeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoffeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
