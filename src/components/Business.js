import React from 'react';

const Business = ({business}) => {

    return (
        <div>
            <img src={business.imageSrc} alt="business" />
            <div>
                <h2>{business.name}</h2>
                <p>Address: {business.address}</p>
                <p>City: {business.city}</p>
                <p>State: {business.state}</p>
                <p>Zip Code: {business.zipCode}</p>
                <p>Category: {business.category}</p>
                <p>Rating: {business.rating}</p>
                <p>Review Count: {business.reviewCount}</p>
            </div>
        </div>
    );
};

export default Business;