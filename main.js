"use strict";
//Q:39 City Names: Write a function called city_country() that takes in the name of a city and 
// its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function country_city(city, country) {
    return `${city}, ${country}`;
}
//  calling function with three citi_country pairs
let city1 = country_city("lahore", "pakistan");
let city2 = country_city("new york", "USA");
let city3 = country_city("paris", "France");
// printing the value return by the function 
console.log(city1);
console.log(city2);
console.log(city3);
