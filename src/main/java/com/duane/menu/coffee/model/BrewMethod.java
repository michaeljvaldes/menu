package com.duane.menu.coffee.model;

import java.util.Arrays;
import java.util.Optional;

public enum BrewMethod {

    POUR_OVER(1),
    DRIP(2),
    FRENCH_PRESS(3),
    AEROPRESS(4),
    PERCOLATOR(5),
    ESPRESSO(6);


    private final int id;

    BrewMethod(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public static Optional<BrewMethod> fromId(int id) {
        return Arrays.stream(values())
                .filter(brewMethod -> brewMethod.getId() == id)
                .findFirst();
    }


}
