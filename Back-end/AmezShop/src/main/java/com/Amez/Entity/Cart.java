package com.Amez.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	@ManyToOne
	private Product product;
	private int quantity;
	private int uid;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public Cart(int id, Product product, int quantity, int uid) {
		super();
		this.id = id;
		this.product = product;
		this.quantity = quantity;
		this.uid = uid;
	}
	
	public Cart() {
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Cart [id=" + id + ", product=" + product + ", quantity=" + quantity + ", uid=" + uid + "]";
	}
}
