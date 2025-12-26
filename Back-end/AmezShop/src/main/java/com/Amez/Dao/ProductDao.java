package com.Amez.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Amez.Entity.Product;

@Repository
public interface ProductDao extends JpaRepository<Product, Integer>{

}
