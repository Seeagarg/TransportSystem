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

import com.car.booking.entities.Driver;
import com.car.booking.services.DriverService;

@CrossOrigin(origins="*",allowedHeaders="*")
@RestController
public class DriverController {
	
	@Autowired
	private DriverService ds;
	
	@PostMapping("/driver")
	public Driver AddDriver(@RequestBody Driver driver) {
		return this.ds.createDriver(driver);
	}

	
	@GetMapping("/driver")
	public List<Driver> getAll(){
		return this.ds.getAllDriver();
	}
	
	@PutMapping("/driver/{id}")
	public Driver deleteDriver(@PathVariable("id")int id,@RequestBody Driver driver) {
		return this.ds.updateDriver(id, driver);
	}
	
	@DeleteMapping("/driver/{id}")
	public String deleteDriver(@PathVariable("id") int id) {
		return this.ds.deleteDriver(id);
	}
	
	@GetMapping("/driver/search/{keyword}")
	public List<Driver> searchDriver(@PathVariable("keyword")String Keyword) {
		return this.ds.SearchByAddress(Keyword);
	}
}
