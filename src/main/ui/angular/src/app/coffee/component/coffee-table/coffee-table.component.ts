import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Coffee } from "../../model/coffee";
import { MatTableDataSource } from "@angular/material/table";
import { CoffeeService } from "../../service/coffee.service";
import { MatDialog } from "@angular/material/dialog";
import { NewCoffeeDialogComponent } from "../new-coffee-dialog/new-coffee-dialog.component";
import { Router } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: 'app-coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.scss']
})
export class CoffeeTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'roaster', 'name', 'country'];
  dataSource = new MatTableDataSource<Coffee>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private coffeeService: CoffeeService,
    private newCoffeeDialog: MatDialog) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.coffeeService.updateCoffees();
    this.coffeeService.coffees$.subscribe(
      coffees => this.dataSource.data = coffees,
      err => console.log('Error subscribing to coffees')
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openNewCoffeeDialog(): void {
    let dialogRef = this.newCoffeeDialog.open(NewCoffeeDialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(newCoffee => {
        if (newCoffee) {
          this.coffeeService.updateCoffees();
        }
      }, err => console.log('Error subscribing to coffees')
    );
  }
}
