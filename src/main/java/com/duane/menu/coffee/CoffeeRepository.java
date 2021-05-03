package com.duane.menu.coffee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface CoffeeRepository extends JpaRepository<Coffee, Long> {


}
