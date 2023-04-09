package com.car.booking.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class RentalProvider {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String name;
	
	private long phone;
	
	private String address;
	
	private String vehical_type;
	
	private String vehical_no;
	
	private long price;
	
	@Lob 
	@Column(length=250)
	private String description;

	public RentalProvider() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RentalProvider(int id, String name, long phone, String address, String vehical_type, String vehical_no,
			String description,long price) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.address = address;
		this.vehical_type = vehical_type;
		this.vehical_no = vehical_no;
		this.description = description;
		this.price=price;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getVehical_type() {
		return vehical_type;
	}

	public void setVehical_type(String vehical_type) {
		this.vehical_type = vehical_type;
	}

	public String getVehical_no() {
		return vehical_no;
	}

	public void setVehical_no(String vehical_no) {
		this.vehical_no = vehical_no;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "RentalProvider [id=" + id + ", name=" + name + ", phone=" + phone + ", address=" + address
				+ ", vehical_type=" + vehical_type + ", vehical_no=" + vehical_no + ", description=" + description +",price="+ 
				price + "]";
	}

	
	
	

}
