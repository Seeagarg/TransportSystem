package com.car.booking.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Driver {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String name;
	
	private long phone;
	
	private String gender;
	
	private String licence;
	
	private String image;
	
	private String address;
	
	private String carColour;
	
	private String carType;
	
	private String carNumber;

	public Driver() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Driver(int id, String name, long phone, String gender, String licence, String image, String address,
			String carColour, String carType, String carNumber) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.gender = gender;
		this.licence = licence;
		this.image = image;
		this.address = address;
		this.carColour = carColour;
		this.carType = carType;
		this.carNumber = carNumber;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getLicence() {
		return licence;
	}

	public void setLicence(String licence) {
		this.licence = licence;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCarColour() {
		return carColour;
	}

	public void setCarColour(String carColour) {
		this.carColour = carColour;
	}

	public String getCarType() {
		return carType;
	}

	public void setCarType(String carType) {
		this.carType = carType;
	}

	public String getCarNumber() {
		return carNumber;
	}

	public void setCarNumber(String carNumber) {
		this.carNumber = carNumber;
	}

	@Override
	public String toString() {
		return "Driver [id=" + id + ", name=" + name + ", phone=" + phone + ", gender=" + gender + ", licence="
				+ licence + ", image=" + image + ", address=" + address + ", carColour=" + carColour + ", carType="
				+ carType + ", carNumber=" + carNumber + "]";
	}
	
	

	
	
	
	
	
	

}
