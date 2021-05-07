import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Coffee } from "../model/coffee";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private coffeesUrl: string = 'http://localhost:8080/api/coffee';
  private coffeeSubject: BehaviorSubject<Coffee[]> = new BehaviorSubject<Coffee[]>([]);
  private pageCoffeeSubject: BehaviorSubject<Coffee[]> = new BehaviorSubject<Coffee[]>([]);

  constructor(private http: HttpClient) { }

  get coffees$(): Observable<Coffee[]> {
    return this.coffeeSubject.asObservable();
  }

  get pageCoffees$(): Observable<Coffee[]> {
    return this.pageCoffeeSubject.asObservable();
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

  updatePageCoffees(page: number, count: number): void {
    const pageCoffeeUrl = `${this.coffeesUrl}?page=${page}&count=${count}`;
    this.http.get<PaginatedCoffees>(pageCoffeeUrl)
      .subscribe(data => this.pageCoffeeSubject.next(data.content));
  }
}

export class PaginatedCoffees {
  content: Coffee[];
  pageable : {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
  sort : {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;

}
