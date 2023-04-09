package com.car.booking.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.car.booking.entities.RentalProvider;
import com.car.booking.repositories.RentalProviderRepo;


@Service
public class RentalProviderServices {
	
	@Autowired
	RentalProviderRepo rp;
	
	
	
	//Add new rental provider
	
	public RentalProvider createProvider(RentalProvider provider) {
		
		return this.rp.save(provider);
		
		
		
	}
	
	//get All Rental providers
	
	public List<RentalProvider> getProviders(){
		
		return this.rp.findAll();
	}
	
	
	//search Rental Provider 
	
	
	public List<RentalProvider> searchProvider(String Keyword){
		
		return this.rp.findByAddressContainingIgnoreCase(Keyword);
		
	}

}
