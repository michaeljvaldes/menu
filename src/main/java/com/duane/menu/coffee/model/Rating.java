package com.duane.menu.coffee.model;

import java.util.Arrays;
import java.util.Optional;

public enum Rating {

    ONE_STAR(1),
    TWO_STARS(2),
    THREE_STARS(3),
    FOUR_STARS(4),
    FIVE_STARS(5);

    private final int id;

    Rating(int id) {
        this.id = id;
    }

    public int getId() {
        return this.id;
    }

    public static Optional<Rating> fromId(int id) {
        if (id >= 5) {
            return Optional.of(FIVE_STARS);
        } else if (id <= 1) {
            return Optional.of(ONE_STAR);
        } else {
            return Arrays.stream(values())
                    .filter(rating -> rating.getId() == id)
                    .findFirst();
        }
    }
}
