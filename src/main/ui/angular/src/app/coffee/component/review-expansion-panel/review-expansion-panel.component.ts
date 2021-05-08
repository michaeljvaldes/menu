import { Component, Input, OnInit } from '@angular/core';
import { Review } from "../../model/review";

@Component({
  selector: 'app-review-expansion-panel',
  templateUrl: './review-expansion-panel.component.html',
  styleUrls: ['./review-expansion-panel.component.scss']
})
export class ReviewExpansionPanelComponent implements OnInit {

  panelOpenState = false;
  @Input()  review: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
