package com.duane.menu.recipe;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

public class RecipeNotFoundException extends RuntimeException {

    RecipeNotFoundException(Long id) {
         super("Could not find recipe " + id);
    }
}
