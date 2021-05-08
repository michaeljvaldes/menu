package com.duane.menu.coffee.model;

import com.duane.menu.coffee.model.BrewMethod;
import com.duane.menu.coffee.model.Coffee;
import com.duane.menu.coffee.model.Rating;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //    private User user;
    private ZonedDateTime dateTime;
    private Rating rating;
    private BrewMethod brewMethod;
    private Integer temperature;
    private String notes;
//    //pic?

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "coffee_id", nullable = false)
    @JsonBackReference
    private Coffee coffee;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public ZonedDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(ZonedDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public BrewMethod getBrewMethod() {
        return brewMethod;
    }

    public void setBrewMethod(BrewMethod brewMethod) {
        this.brewMethod = brewMethod;
    }

    public Integer getTemperature() {
        return temperature;
    }

    public void setTemperature(Integer temperature) {
        this.temperature = temperature;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Coffee getCoffee() {
        return coffee;
    }

    public void setCoffee(Coffee coffee) {
        this.coffee = coffee;
    }
}
