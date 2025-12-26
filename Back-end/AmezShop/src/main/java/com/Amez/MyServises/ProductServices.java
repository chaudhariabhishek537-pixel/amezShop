package com.Amez.MyServises;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Amez.Dao.CategoryDao;
import com.Amez.Dao.ProductDao;
import com.Amez.Entity.Category;
import com.Amez.Entity.Product;

@Service
public class ProductServices {

	@Autowired
	CategoryDao cd;
	
	@Autowired
	ProductDao pd;
	
	public List<Category> categorylist(){
		return cd.findAll();
	}

	public List<Product> productList() {
		return pd.findAll();
	}
	
}
