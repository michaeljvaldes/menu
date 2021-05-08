import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewExpansionPanelComponent } from './review-expansion-panel.component';

describe('ReviewExpansionPanelComponent', () => {
  let component: ReviewExpansionPanelComponent;
  let fixture: ComponentFixture<ReviewExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewExpansionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
