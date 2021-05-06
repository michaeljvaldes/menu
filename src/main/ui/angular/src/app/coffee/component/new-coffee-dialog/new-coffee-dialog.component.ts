import { Component, OnInit } from '@angular/core';
import { Coffee } from "../../model/coffee";
import { MatDialogRef } from "@angular/material/dialog";
import { CoffeeService } from "../../service/coffee.service";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-coffee-dialog',
  templateUrl: './new-coffee-dialog.component.html',
  styleUrls: ['./new-coffee-dialog.component.scss']
})
export class NewCoffeeDialogComponent implements OnInit {

  newCoffeeForm: FormGroup = this.formBuilder.group({
    roaster: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required])
  })

  constructor(
    private dialogRef: MatDialogRef<NewCoffeeDialogComponent>,
    private coffeeService: CoffeeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void { }

  get roaster(): AbstractControl {
    return this.newCoffeeForm.get('roaster');
  }

  get name(): AbstractControl {
    return this.newCoffeeForm.get('name');
  }

  get country(): AbstractControl {
    return this.newCoffeeForm.get('country');
  }

  getErrorMessage(): string {
    return 'This field is required';
  }

  save() {
    if (!this.newCoffeeForm.valid) {
      this.newCoffeeForm.markAllAsTouched();
    } else {

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
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
