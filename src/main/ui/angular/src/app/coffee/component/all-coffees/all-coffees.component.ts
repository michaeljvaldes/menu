import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CoffeeService } from "../../service/coffee.service";
import { Coffee } from "../../model/coffee";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-all-coffees',
  templateUrl: './all-coffees.component.html',
  styleUrls: ['./all-coffees.component.scss']
})
export class AllCoffeesComponent implements OnInit {

  coffees: Coffee[];
  initialPageIndex = 0;
  initialPageSize = 5;
  pageEvent: PageEvent;
  totalPages: number;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.coffeeService.updatePageCoffees(this.initialPageIndex, this.initialPageSize);
    this.coffeeService.pageCoffees$.subscribe(
      pageCoffees => {
        this.coffees = pageCoffees.content;
        this.totalPages = pageCoffees.totalPages;
      },
      err => console.log('Error fetching page coffees')
    );
  }

  updatePageCoffees(event?: PageEvent): PageEvent {
    this.coffeeService.updatePageCoffees(event.pageIndex, event.pageSize);
    return event;
}

}
