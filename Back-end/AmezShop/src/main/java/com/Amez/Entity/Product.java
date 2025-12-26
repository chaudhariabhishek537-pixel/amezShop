package com.Amez.Entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;


@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)   // MySQL supports IDENTITY
    private int id;

    private String name;
    private String description;
    private float original_price;
    private float selling_price;
    private float discount;
    private String imageUrl;
    private float rating;
    private int review;

    @ManyToOne
    private Category category;
    
    @OneToMany
    private List<P_image> p_image;

    public Product() {}

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getOriginal_price() {
		return original_price;
	}

	public void setOriginal_price(float original_price) {
		this.original_price = original_price;
	}

	public float getSelling_price() {
		return selling_price;
	}

	public void setSelling_price(float selling_price) {
		this.selling_price = selling_price;
	}

	public float getDiscount() {
		return discount;
	}

	public void setDiscount(float discount) {
		this.discount = discount;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public int getReview() {
		return review;
	}

	public void setReview(int review) {
		this.review = review;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<P_image> getP_image() {
		return p_image;
	}

	public void setP_image(List<P_image> p_image) {
		this.p_image = p_image;
	}

	public Product(int id, String name, String description, float original_price, float selling_price, float discount,
			String imageUrl, float rating, int review, Category category, List<P_image> p_image) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.original_price = original_price;
		this.selling_price = selling_price;
		this.discount = discount;
		this.imageUrl = imageUrl;
		this.rating = rating;
		this.review = review;
		this.category = category;
		this.p_image = p_image;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", description=" + description + ", original_price="
				+ original_price + ", selling_price=" + selling_price + ", discount=" + discount + ", imageUrl="
				+ imageUrl + ", rating=" + rating + ", review=" + review + ", category=" + category + ", p_image="
				+ p_image + "]";
	}

	
}
