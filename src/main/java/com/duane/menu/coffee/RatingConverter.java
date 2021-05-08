package com.duane.menu.coffee;

import com.duane.menu.coffee.model.Rating;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class RatingConverter implements AttributeConverter<Rating, Integer> {

    @Override
    public Integer convertToDatabaseColumn(Rating rating) {
        if (rating == null) {
            return null;
        } else {
            return rating.getId();
        }
    }

    @Override
    public Rating convertToEntityAttribute(Integer id) {
        if (id == null) {
            return null;
        } else {
            return Rating.fromId(id).orElse(null);
        }
    }
}
