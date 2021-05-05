package com.duane.menu.coffee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coffee")
@CrossOrigin(origins = "http://localhost:4200")
public class CoffeeController {

    private final CoffeeService coffeeService;

    @Autowired
    public CoffeeController(CoffeeService coffeeService) {
        this.coffeeService = coffeeService;
    }

    @GetMapping
    public List<Coffee> getAllCoffees() {
        return coffeeService.getAllCoffees();
    }

    @PostMapping
    public List<Coffee> addCoffee(@RequestBody Coffee coffee) {
        return coffeeService.addCoffee(coffee);
    }
}
