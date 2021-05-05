import { Component, OnInit } from '@angular/core';
import { Coffee } from "../model/coffee";
import { MatDialogRef } from "@angular/material/dialog";
import { CoffeeService } from "../service/coffee.service";

@Component({
  selector: 'app-new-coffee-dialog',
  templateUrl: './new-coffee-dialog.component.html',
  styleUrls: ['./new-coffee-dialog.component.scss']
})
export class NewCoffeeDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<NewCoffeeDialogComponent>,
    private coffeeService: CoffeeService
  ) { }

  ngOnInit(): void {
  }

  save() {
    let coffee: Coffee = {
      id: null,
      roaster: 'Rev Coffee Roasters',
      name: 'Ethiopia Kembata',
      country: 'Ethiopia'
    };

    this.coffeeService.addCoffee(coffee)
      .subscribe(coffees => {
        this.dialogRef.close();
        },
        err => {console.log('Error adding new coffee')}
      );
  }

}
