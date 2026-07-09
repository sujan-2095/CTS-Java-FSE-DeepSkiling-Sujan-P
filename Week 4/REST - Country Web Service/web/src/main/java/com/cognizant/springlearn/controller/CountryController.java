package com.cognizant.springlearn.controller;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.model.Country;

@RestController
public class CountryController {

    @RequestMapping("/country")
    public Country getCountryIndia() {

        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country = (Country) context.getBean("in");

        return country;
    }
}