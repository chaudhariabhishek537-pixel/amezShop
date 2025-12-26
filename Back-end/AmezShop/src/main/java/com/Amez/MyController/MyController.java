package com.Amez.MyController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Amez.DTO.LoginDTO;
import com.Amez.DTO.RegisterDTO;
import com.Amez.Entity.Category;
import com.Amez.Entity.Product;
import com.Amez.Entity.User;
import com.Amez.MyServises.ProductServices;
import com.Amez.MyServises.UserServices;


@RestController
public class MyController {
	
	@Autowired
	UserServices us;
	
	@Autowired
	ProductServices ps;

	@GetMapping("/")
	public String home() {
		return "Home....";
	}
	
	@PostMapping("/login")
	public String login(@RequestBody LoginDTO loginDTO) {
		System.out.println(loginDTO);
		return "Login....";
	}
	
	@PostMapping("/register")
	public String register(@RequestBody RegisterDTO registerDTO) {
		User u = us.getUser(registerDTO.getEmail());
		if(u == null) {
			us.addUser(registerDTO);
			return "true";
		}
		return "false";
	}
	
	@GetMapping("/categories")
	public List<Category> categorilist(){
		return ps.categorylist();
	}
	
	@GetMapping("/products")
	public List<Product> productList(){
		return ps.productList();
	}
}
