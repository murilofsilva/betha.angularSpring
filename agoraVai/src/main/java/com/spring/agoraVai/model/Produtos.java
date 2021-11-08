package com.spring.agoraVai.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Produtos implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private float price;

    public Produtos(Long id, String name, float price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public Produtos() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public float getPrice() {
        return price;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
