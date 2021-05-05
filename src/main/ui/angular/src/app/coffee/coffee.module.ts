import { NgModule } from '@angular/core';
import { CoffeesComponent } from './component/coffees/coffees.component';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CoffeeTableComponent } from './component/coffee-table/coffee-table.component';
import { NewCoffeeDialogComponent } from './new-coffee-dialog/new-coffee-dialog.component';

const routes: Routes = [
  { path: '', component: CoffeesComponent },
  { path: '**', redirectTo: 'coffee' }
]

@NgModule({
  declarations: [
    CoffeesComponent,
    CoffeeTableComponent,
    NewCoffeeDialogComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CoffeeModule {
}
