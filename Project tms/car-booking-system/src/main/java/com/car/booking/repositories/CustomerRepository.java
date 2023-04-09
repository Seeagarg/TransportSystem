package com.car.booking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.car.booking.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {

}
