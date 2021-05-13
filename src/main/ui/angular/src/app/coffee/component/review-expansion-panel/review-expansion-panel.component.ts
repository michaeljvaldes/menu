import { Component, Input, OnInit } from '@angular/core';
import { Review } from "../../model/review";

@Component({
  selector: 'app-review-expansion-panel',
  templateUrl: './review-expansion-panel.component.html',
  styleUrls: ['./review-expansion-panel.component.scss']
})
export class ReviewExpansionPanelComponent implements OnInit {

  @Input() review: Review;

  panelOpenState = false;
  ratingArr = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void { }

  showIcon(index: number): string {
    console.log(`rating = ${this.review.rating}`)
    console.log(`star_index = ${index}`)
    if (this.review.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
