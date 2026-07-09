package com.cognizant.springlearn.service;

import java.util.List;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.model.CountryList;

@Service
public class CountryService {

    public Country getCountry(String code) {

        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        CountryList countryList =
                context.getBean("countryList", CountryList.class);

        List<Country> countries = countryList.getCountryList();

        for (Country country : countries) {

            if (country.getCode().equalsIgnoreCase(code)) {
                context.close();
                return country;
            }
        }

        context.close();
        return null;
    }
}