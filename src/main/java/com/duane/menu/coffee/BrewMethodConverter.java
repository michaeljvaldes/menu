package com.duane.menu.coffee;

import com.duane.menu.coffee.model.BrewMethod;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class BrewMethodConverter implements AttributeConverter<BrewMethod, Integer> {

    @Override
    public Integer convertToDatabaseColumn(BrewMethod brewMethod) {
        if (brewMethod == null) {
            return null;
        } else {
            return brewMethod.getId();
        }
    }

    @Override
    public BrewMethod convertToEntityAttribute(Integer id) {
        if (id == null) {
            return null;
        } else {
            return BrewMethod.fromId(id).orElse(null);
        }
    }
}
