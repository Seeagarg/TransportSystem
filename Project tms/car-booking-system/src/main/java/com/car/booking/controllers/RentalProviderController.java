package com.car.booking.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.car.booking.entities.RentalProvider;
import com.car.booking.services.RentalProviderServices;

@RestController
public class RentalProviderController {

	@Autowired
	RentalProviderServices rps;
	
	@GetMapping("/rental_provider")
	public List<RentalProvider> getallProviders(){
		
		return this.rps.getProviders();
	}
	
	@PostMapping("/rental_provider")
	public RentalProvider CreateNewProvider(@RequestBody RentalProvider provider) {
		
		return this.rps.createProvider(provider);
	}
	
	
	@GetMapping("/rental_provider/{keyword}")
	public List<RentalProvider> searchProviders(@PathVariable("keyword") String Keyword){
		
		return this.rps.searchProvider(Keyword);
	}
	
}
