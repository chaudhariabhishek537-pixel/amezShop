package com.Amez;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("com")
@SpringBootApplication
public class AmezShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(AmezShopApplication.class, args);
		System.err.println("Welcome....");
	}

}
