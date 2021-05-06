import { Component, OnInit } from '@angular/core';
import { Coffee } from "../../model/coffee";
import { CoffeeService } from "../../service/coffee.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})
export class CoffeeDetailsComponent implements OnInit {

  coffee: Coffee;

  constructor(private coffeeService: CoffeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id: number = +params.id;
      if (!id) {
        id = 1;
      }
      this.coffeeService.getCoffeeById(id).subscribe(coffee =>
        this.coffee = coffee)
    });
  }

}
