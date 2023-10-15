package com.iotwatch;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
@ConfigurationPropertiesScan("com.iotwatch.config")
public class IotwatchApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(IotwatchApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}
}
