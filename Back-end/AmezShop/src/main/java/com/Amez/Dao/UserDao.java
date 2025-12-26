package com.Amez.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Amez.Entity.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

	User findByEmail(String email);

}
