package com.car.booking.dtos;

public class driverDto {
	
	private String name;
	
	private long phone;
	
	private String carType;
	
	private String carColor;
	
	private String carNumber;

	public driverDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public driverDto(String name, long phone, String carType, String carColor, String carNumber) {
		super();
		this.name = name;
		this.phone = phone;
		this.carType = carType;
		this.carColor = carColor;
		this.carNumber = carNumber;
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

	public String getCarType() {
		return carType;
	}

	public void setCarType(String carType) {
		this.carType = carType;
	}

	public String getCarColor() {
		return carColor;
	}

	public void setCarColor(String carColor) {
		this.carColor = carColor;
	}

	public String getCarNumber() {
		return carNumber;
	}

	public void setCarNumber(String carNumber) {
		this.carNumber = carNumber;
	}

	@Override
	public String toString() {
		return "driverDto [name=" + name + ", phone=" + phone + ", carType=" + carType + ", carColor=" + carColor
				+ ", carNumber=" + carNumber + "]";
	}
	
	

}
