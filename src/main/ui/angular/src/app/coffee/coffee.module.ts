import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeesComponent } from './component/coffees/coffees.component';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CoffeeTableComponent } from './component/coffee-table/coffee-table.component';

const routes: Routes = [
  { path: '', component: CoffeesComponent },
  { path: '**', redirectTo: 'coffee' }
]

@NgModule({
  declarations: [
    CoffeesComponent,
    CoffeeTableComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CoffeeModule {
}
