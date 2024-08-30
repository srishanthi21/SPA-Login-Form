package com.example.demo.controller;

import com.example.demo.entity.Sellers;
import com.example.demo.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class SellerController {
    @Autowired
    private SellerRepository sellerRepository;
@GetMapping("/sellers")
    public List<Sellers> getAllSellers(@RequestParam(required = false) String name){
        if(name!= null && !name.isEmpty()){
            return sellerRepository.findByNameContaining(name);
        }
        return sellerRepository.findAll();
    }
}
