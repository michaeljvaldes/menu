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
  private coffeeSubject: BehaviorSubject<Coffee[]> = new BehaviorSubject<Coffee[]>([]);

  constructor(private http: HttpClient) { }

  get coffees$(): Observable<Coffee[]> {
    return this.coffeeSubject.asObservable();
  }

  addCoffee(newCoffee: Coffee): Observable<Coffee> {
    return this.http.post<Coffee>(this.coffeeUrl, newCoffee);
  }

  updateCoffees(): void {
    this.http.get<Coffee[]>(this.coffeeUrl)
      .subscribe(data => {
        console.log('Data fetched');
        this.coffeeSubject.next(data);
      });
  }
}
