package com.Amez.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class P_image {
	
	@Id
	private int id;
	private String imageUrl;
	private int pid;
	
	public P_image() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public P_image(int id, String imageUrl, int pid) {
		super();
		this.id = id;
		this.imageUrl = imageUrl;
		this.pid = pid;
	}

	@Override
	public String toString() {
		return "P_image [id=" + id + ", imageUrl=" + imageUrl + ", pid=" + pid + "]";
	}
	
}
