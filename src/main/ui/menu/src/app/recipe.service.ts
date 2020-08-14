import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  private recipesUrl = 'http://localhost:8080/api/recipes'

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl)
  }
}
