import { NgModule } from '@angular/core';
import { CoffeesComponent } from './component/coffees/coffees.component';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CoffeeTableComponent } from './component/coffee-table/coffee-table.component';
import { NewCoffeeDialogComponent } from './component/new-coffee-dialog/new-coffee-dialog.component';
import { CoffeeDetailsComponent } from './component/coffee-details/coffee-details.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AllCoffeesComponent } from './component/all-coffees/all-coffees.component';
import { ReviewExpansionPanelComponent } from './component/review-expansion-panel/review-expansion-panel.component';

const routes: Routes = [
  {
    path: '',
    component: CoffeesComponent,
    children: [
      { path: '', component: CoffeeTableComponent },
      { path: 'all-coffees', component: AllCoffeesComponent },
      { path: ':id', component: CoffeeDetailsComponent }
    ]
  },
  { path: '**', redirectTo: 'coffee' }
];

@NgModule({
  declarations: [
    CoffeesComponent,
    CoffeeTableComponent,
    NewCoffeeDialogComponent,
    CoffeeDetailsComponent,
    ToolbarComponent,
    AllCoffeesComponent,
    ReviewExpansionPanelComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CoffeeModule {
}
