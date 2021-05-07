package com.duane.menu.coffee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CoffeeService {

    private final CoffeeRepository coffeeRepository;

    @Autowired
    public CoffeeService(CoffeeRepository coffeeRepository) {
        this.coffeeRepository = coffeeRepository;
    }

    public List<Coffee> getCoffees() {
        return coffeeRepository.findAll();
    }

    public Page<Coffee> getCoffeesPaginated(int page, int count) {
        Pageable pageable = PageRequest.of(page, count);
        return coffeeRepository.findAll(pageable);
    }

    public Optional<Coffee> getCoffeeById(long id) {
        return coffeeRepository.findById(id);
    }

    public Coffee addCoffee(Coffee coffee) {
        return coffeeRepository.save(coffee);
    }
}
