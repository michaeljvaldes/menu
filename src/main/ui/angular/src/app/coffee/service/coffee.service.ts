import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from "rxjs";
import { Coffee } from "../model/coffee";
import { HttpClient } from "@angular/common/http";
import { catchError, shareReplay, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private coffeesUrl: string = 'http://localhost:8080/api/coffee';
  private coffeeSubject: BehaviorSubject<Coffee[]> = new BehaviorSubject<Coffee[]>([]);

  constructor(private http: HttpClient) { }

  get coffees$(): Observable<Coffee[]> {
    return this.coffeeSubject.asObservable();
  }

  getCoffeeById(id: number): Observable<Coffee> {
    const coffeeUrl = `${this.coffeesUrl}/${id}`
    return this.http.get<Coffee>(coffeeUrl);
  }

  addCoffee(newCoffee: Coffee): Observable<Coffee> {
    return this.http.post<Coffee>(this.coffeesUrl, newCoffee);
  }

  updateCoffees(): void {
    this.http.get<Coffee[]>(this.coffeesUrl)
      .subscribe(data => {
        console.log('Data fetched');
        this.coffeeSubject.next(data);
      });
  }
}
