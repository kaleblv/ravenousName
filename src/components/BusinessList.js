import React from "react";
import Business from "./Business";

const BusinessList = () => {
    const businesses = [
        {
            imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
          },
          {
            imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
            name: 'Sushi World',
            address: '2020 Ocean Ave',
            city: 'Coastal City',
            state: 'CA',
            zipCode: '90210',
            category: 'Japanese',
            rating: 4.8,
            reviewCount: 120
          },
          {
            imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
            name: 'Burger House',
            address: '3030 Burger Blvd',
            city: 'Meat Town',
            state: 'TX',
            zipCode: '73301',
            category: 'American',
            rating: 4.2,
            reviewCount: 75
          }
    ]

    return (
        <div>
            {businesses.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </div>

    )
}

export default BusinessList;
