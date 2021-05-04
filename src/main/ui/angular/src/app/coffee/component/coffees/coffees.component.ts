import { Component, OnInit } from '@angular/core';
import { CoffeeService } from "../../service/coffee.service";
import {Coffee} from "../../model/coffee";

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.scss']
})
export class CoffeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
