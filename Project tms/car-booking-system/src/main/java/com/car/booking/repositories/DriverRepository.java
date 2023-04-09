package com.car.booking.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.car.booking.entities.Driver;

@Repository
public interface DriverRepository extends JpaRepository<Driver,Integer> {
	
   public List<Driver> findByAddressContainingIgnoreCase(String address);
}
