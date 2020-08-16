package com.duane.menu.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    private RecipeRepository recipeRepository;

    @Autowired
    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public Optional<Recipe> getRecipeById(Long id) {
        return recipeRepository.findById(id);
    }

    public void deleteRecipeById(Long id) {
        recipeRepository.deleteById(id);
    }

    public Recipe putRecipe(Recipe newRecipe) {
        Optional<Recipe> optionalRecipe = recipeRepository.findById(newRecipe.getId());
        if (optionalRecipe.isPresent()) {
            Recipe oldRecipe = optionalRecipe.get();
            oldRecipe.setName(newRecipe.getName());
            return recipeRepository.save(oldRecipe);
        } else {
            return recipeRepository.save(newRecipe);
        }
    }
}
