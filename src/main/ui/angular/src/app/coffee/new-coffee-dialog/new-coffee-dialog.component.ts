import { Component, OnInit } from '@angular/core';
import { Coffee } from "../model/coffee";
import { MatDialogRef } from "@angular/material/dialog";
import { CoffeeService } from "../service/coffee.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-coffee-dialog',
  templateUrl: './new-coffee-dialog.component.html',
  styleUrls: ['./new-coffee-dialog.component.scss']
})
export class NewCoffeeDialogComponent implements OnInit {

  private coffee: Coffee;
  roaster: FormControl;
  name: FormControl;
  country: FormControl;

  constructor(
    private dialogRef: MatDialogRef<NewCoffeeDialogComponent>,
    private coffeeService: CoffeeService
  ) { }

  ngOnInit(): void {
    this.roaster = new FormControl('', [Validators.required]);
    this.name = new FormControl('', [Validators.required]);
    this.country = new FormControl('', [Validators.required]);
  }

  save() {
    const coffee: Coffee = {
      id: null,
      roaster: this.roaster.value,
      name: this.name.value,
      country: this.country.value
    };

    this.coffeeService.addCoffee(coffee)
      .subscribe(coffee => {
          this.dialogRef.close(coffee);
        },
        err => {console.log('Error adding new coffee')}
      );
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
