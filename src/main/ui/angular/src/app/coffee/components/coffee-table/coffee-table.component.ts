import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {Coffee} from "../../model/coffee";
import {MatTableDataSource} from "@angular/material/table";
import { CoffeeService } from "../../service/coffee.service";
import { tap } from "rxjs/operators";

const dummyData: Coffee[] = [
  {
    id: 1,
    roaster: "Greater Goods Coffee Co.",
    name: "Fresh Perspective",
    country: "Ethiopia"
  },
  {
    id: 2,
    roaster: "Greater Goods Coffee Co.",
    name: "Kinini Village",
    country: "Rwanda"
  },
  {
    id: 3,
    roaster: "Greater Goods Coffee Co.",
    name: "Take Me Home",
    country: "Costa Rica"
  },
  {
    id: 4,
    roaster: "1000 Faces Coffee",
    name: "Ngoma Bikunda Island",
    country: "Rwanda"
  }
];

@Component({
  selector: 'app-coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.scss']
})
export class CoffeeTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'roaster', 'name', 'country'];
  dataSource = new MatTableDataSource<Coffee>();

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.coffeeService.coffees.subscribe(
      coffees => {
        this.dataSource.data = coffees;
      },
      err => console.log('Error subscribing to coffees')
    );
  }

}
