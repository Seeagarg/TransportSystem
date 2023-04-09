package com.car.booking.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.car.booking.dtos.CustomerDto;
import com.car.booking.entities.Customer;
import com.car.booking.repositories.CustomerRepository;

@Service
public class CustomerServices {
	
	@Autowired
	private CustomerRepository cr;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	//Add customer
	
	public CustomerDto addCustomer(CustomerDto customer) {
		
		Customer c1=modelMapper.map(customer, Customer.class);
		
		Customer saved=this.cr.save(c1);
		
		return modelMapper.map(saved, CustomerDto.class);
		
	}
	
	//Get all Customer
	
	public List<CustomerDto> getAllCustomer(){
		
		List<Customer> li=this.cr.findAll();
		
		return li.stream().map(i->modelMapper.map(i, CustomerDto.class)).collect(Collectors.toList());
		
	}
	
	//Update Customer
	
	public String updateCustomer(int id,CustomerDto customer) {
		
		Optional<Customer> cc=this.cr.findById(id);
		
	    Customer c=modelMapper.map(customer, Customer.class);
	    
	    Customer uc=cc.get();
	    
	    uc.setId(id);
	    uc.setAddress(c.getAddress());
	    uc.setName(c.getName());
	    uc.setPhone(c.getPhone());
	    
	    this.cr.save(uc);
	    
	    return "Customer Updated Sucessfully";
		
	}
	
	//Delete Customer
	
	public String deleteCustomer(int id) {
		this.cr.deleteById(id);
		
		return "Customer deleted Sucessfully";
	}

}
