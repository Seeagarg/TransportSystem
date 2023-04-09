package com.car.booking.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.car.booking.entities.Driver;
import com.car.booking.repositories.DriverRepository;

@Service
public class DriverService {

	@Autowired
	private DriverRepository dr;
	
	//getAllDriver
	
	public List<Driver> getAllDriver(){
		return this.dr.findAll();
	
	}
	
	//Add Driver
	
	public Driver createDriver(Driver driver) {
		
		
		
		
		this.dr.save(driver);
		return driver;
		}
			
		
		
	
	
	//Update Driver
	public Driver updateDriver(int id,Driver driver) {
		Optional<Driver> d=this.dr.findById(id);
		 Driver d1=d.get();
		 
		  d1.setId(id);
		  d1.setName(driver.getName());
		  d1.setPhone(driver.getPhone());
		  d1.setAddress(driver.getAddress());
		  d1.setCarColour(driver.getCarColour());
		  d1.setCarNumber(driver.getCarNumber());
		  d1.setCarType(driver.getCarType());
		  d1.setGender(driver.getGender());
		  d1.setLicence(driver.getLicence());
		  
		  this.dr.save(d1);
		  return d1;
		  
	}
	
	//Delete Driver
	
	public String deleteDriver(int id) {
		this.dr.deleteById(id);
		return "deleted";
	}
	
	//Search Driver By Address
	
	public List<Driver> SearchByAddress(String Address) {
		return this.dr.findByAddressContainingIgnoreCase(Address);
	}
}
