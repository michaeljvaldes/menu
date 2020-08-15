import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private location: Location
    ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.recipeService.updateRecipe(this.recipe)
      .subscribe(recipe => this.recipe = recipe);
  }

}
