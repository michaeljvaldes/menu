package com.duane.menu.coffee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    public List<Coffee> getCoffees() {
        return coffeeService.getCoffees();
    }

    @GetMapping(params = {"page", "count"})
    Page<Coffee> getCoffeesPaginated(@RequestParam int page, @RequestParam int count) {
        return coffeeService.getCoffeesPaginated(page, count);
    }

    @GetMapping("/{id}")
    public Optional<Coffee> getCoffeeById(@PathVariable long id) {
        return coffeeService.getCoffeeById(id);
    }

    @PostMapping
    public Coffee addCoffee(@RequestBody Coffee coffee) {
        return coffeeService.addCoffee(coffee);
    }
}
