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

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.coffeeService.updateCoffees();
    this.coffeeService.coffees$.subscribe(
      coffees => this.coffees = coffees,
      err => console.log('Error fetching coffees')
    );
  }

}
