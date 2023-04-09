package com.car.booking.dtos;


public class CustomerDto {

    private String name;
	
	private long phone;
	
	private String Address;

	public CustomerDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CustomerDto(String name, long phone, String address) {
		super();
		this.name = name;
		this.phone = phone;
		Address = address;
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

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	@Override
	public String toString() {
		return "CustomerDto [name=" + name + ", phone=" + phone + ", Address=" + Address + "]";
	}
	
	
}
