import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Coffee } from "../model/coffee";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private coffeeUrl: string = 'http://localhost:8080/api/coffee';
  private _coffees: Coffee[];

  constructor(private http: HttpClient) {}

  get coffees(): Observable<Coffee[]> {
    if (this._coffees) {
      return of(this._coffees);
    } else {
      return this.loadCoffees();
    }
  }

  private loadCoffees(): Observable<Coffee[]> {
    this._coffees = [];
    return this.http.get<Coffee[]>(this.coffeeUrl)
      .pipe(
        tap(data => this._coffees = data),
      );
  }
}
