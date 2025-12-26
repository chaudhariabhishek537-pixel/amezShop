package com.Amez.MyServises;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Amez.DTO.RegisterDTO;
import com.Amez.Dao.UserDao;
import com.Amez.Entity.User;


@Service
public class UserServices {
	
	@Autowired
	UserDao d;

	public User getUser(String email) {
		return d.findByEmail(email);
	}

	public void addUser(RegisterDTO registerDTO) {
		User u = new User();
		u.setEmail(registerDTO.getEmail());
		u.setName(registerDTO.getName());
		u.setPassword(registerDTO.getPassword()); 
		System.out.println(u);
		d.save(u);
	}
	
	
}
