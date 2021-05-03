package com.duane.menu.coffee;

import javax.persistence.*;

@Entity
@Table(name = "coffee")
public class Coffee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String roaster; //use roaster icons!
    private String name;
    private String country;
//    private List<String> roasterNotes;
//

    public Long getId() {
        return id;
    }

    public Coffee setId(Long id) {
        this.id = id;
        return this;
    }

    public String getRoaster() {
        return roaster;
    }

    public Coffee setRoaster(String roaster) {
        this.roaster = roaster;
        return this;
    }

    public String getName() {
        return name;
    }

    public Coffee setName(String name) {
        this.name = name;
        return this;
    }

    public String getCountry() {
        return country;
    }

    public Coffee setCountry(String country) {
        this.country = country;
        return this;
    }
}
