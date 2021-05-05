import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from "rxjs";
import { Coffee } from "../model/coffee";
import { HttpClient } from "@angular/common/http";
import { catchError, shareReplay, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private coffeeUrl: string = 'http://localhost:8080/api/coffee';

  constructor(private http: HttpClient) { }

  coffees$: Observable<Coffee[]> = this.http.get<Coffee[]>(this.coffeeUrl)
    .pipe(
      tap(data => console.log('coffees', JSON.stringify(data))),
      shareReplay(1)
    );

  addCoffee(newCoffee: Coffee): Observable<Coffee[]> {
    return this.http.post<Coffee[]>(this.coffeeUrl, newCoffee);
  }
}
