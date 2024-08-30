package com.example.demo.repository;

import com.example.demo.entity.Sellers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SellerRepository extends JpaRepository<Sellers,Long> {

    List<Sellers> findByNameContaining(String name);
}
