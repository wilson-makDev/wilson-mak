import React from 'react';
import './ValentinesIternary.scss';

const ValentinesIternary: React.FC = () => {
    return (
        <div className="valentines-iternary-container">
            <h1>Valentine&apos;s Day Itinerary</h1>
            <ul>
                <li>10:00 AM - Breakfast at Sarah&apos;s favorite cafe</li>
                <li>12:00 PM - Visit the art museum</li>
                <li>2:00 PM - Lunch at the park</li>
                <li>4:00 PM - Movie at the theater</li>
                <li>7:00 PM - Dinner at a fancy restaurant</li>
                <li>9:00 PM - Walk along the beach</li>
                <li>11:00 PM - Stargazing</li>
            </ul>
        </div>
    );
};

export default ValentinesIternary;