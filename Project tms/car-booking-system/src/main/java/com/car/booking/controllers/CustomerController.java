package com.car.booking.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.car.booking.dtos.CustomerDto;
import com.car.booking.services.CustomerServices;

@CrossOrigin(origins="*",allowedHeaders="*")
@RestController
public class CustomerController {
	
	@Autowired
	private CustomerServices cs;
	
	
	@PostMapping("/customer")
	public CustomerDto addCustomer(@RequestBody CustomerDto customer) {
		
		return this.cs.addCustomer(customer);
		
	}
		
	@GetMapping("/customer")
	public List<CustomerDto> getAllCustomer(){
		return this.cs.getAllCustomer();
	}
	
	
	@PutMapping("/customer/{id}")
	public String updateCustomer(@PathVariable("id") int id,@RequestBody CustomerDto customer) {
		return this.cs.updateCustomer(id, customer);
		
	}
	
	
	
	@DeleteMapping("/customer/{id}")
	public String UpdateCustomer(@PathVariable("id") int id) {
		return this.cs.deleteCustomer(id);
		
	}
		
		
	

}
