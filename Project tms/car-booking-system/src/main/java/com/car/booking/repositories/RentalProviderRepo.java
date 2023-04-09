package com.car.booking.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.car.booking.entities.RentalProvider;

@Repository
public interface RentalProviderRepo extends JpaRepository<RentalProvider,Integer> {
	
	public List<RentalProvider> findByAddressContainingIgnoreCase(String keyword);
	

}
