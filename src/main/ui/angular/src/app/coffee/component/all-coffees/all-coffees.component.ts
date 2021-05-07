import { Component, OnInit } from '@angular/core';
import { CoffeeService } from "../../service/coffee.service";
import { Coffee } from "../../model/coffee";

@Component({
  selector: 'app-all-coffees',
  templateUrl: './all-coffees.component.html',
  styleUrls: ['./all-coffees.component.scss']
})
export class AllCoffeesComponent implements OnInit {

  coffees: Coffee[];
  count = 1;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.coffeeService.updatePageCoffees(0, this.count);
    this.coffeeService.pageCoffees$.subscribe(
      coffees => this.coffees = coffees,
      err => console.log('Error fetching page coffees')
    );
  }

}
