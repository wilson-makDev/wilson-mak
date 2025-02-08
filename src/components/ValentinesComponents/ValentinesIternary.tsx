import React, { useState, useEffect } from 'react';
import './ValentinesIternary.scss';

const ValentinesIternary: React.FC = () => {
    const [activeItem, setActiveItem] = useState<{ title: string, description: string } | null>(null);

    const itineraryItems = [
        { time: '5:00 PM', title: 'Head Downtown', description: 'On the commute.' },
        { time: '6:00 PM', title: 'Secret Event', description: 'Oooo what we doin...' },
        { time: '8:30 PM', title: 'Dinner', description: 'Big back time. (Details below)' },
        { time: '10:00 PM', title: 'Free Time', description: 'IZ just you and me bb.' }
    ];

    const handleItemClick = (item: { title: string, description: string }) => {
        setActiveItem(item);
    };

    const [hearts, setHearts] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newHeart = (
                <div
                    className="heart"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        animationDuration: `${Math.random() * 5 + 10}s` // Slower animation
                    }}
                />
            );
            setHearts((hearts) => [...hearts, newHeart]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="valentines-iternary-container">
            {hearts}
            <h1>Valentine&apos;s Day Itinerary</h1>
            <div className="itinerary-list">
                <ul>
                    {itineraryItems.map((item) => (
                        <li
                            key={item.title}
                            onClick={() => handleItemClick(item)}
                        >
                            {item.time} - {item.title}
                        </li>
                    ))}
                </ul>
                {activeItem && (
                    <div className="info-card">
                        <h2>{activeItem.title}</h2>
                        <p>{activeItem.description}</p>
                        {activeItem.title === 'Head Downtown' && (
                            <div className="head-downtown-content">
                                <img src="/gifs/driving.gif" alt="Driving" />
                            </div>
                        )}
                        {activeItem.title === 'Secret Event' && (
                            <div className="secret-event-content">
                                <img src="/gifs/stellarnushu.gif" alt="Stellar Nushu" />
                            </div>
                        )}
                        {activeItem.title === 'Dinner' && (
                            <div className="dinner-content">
                                <img src="/gifs/cat-eat.gif" alt="Cat Eating" />
                                <img src="/gifs/cat.gif" alt="Cat" />
                                <p>Me when I see your food</p>
                                <img src="/gifs/DinnerLocation.png" alt="Dinner Location" className="dinner-location" />
                                <ul className="dinner-details">
                                    <li>Location: Fancy Restaurant</li>
                                    <li>Dress Code: Cute and Comfy</li>
                                    <li>Menu: 6-course meal</li>
                                    <li>Cost: Free for you lil homie</li>
                                    <li>Weather: High -7, Low -23 Celsius</li>
                                </ul>
                            </div>
                        )}
                        {activeItem.title === 'Free Time' && (
                            <div className="free-time-content">
                                <img src="/gifs/scuze-corgi.gif" alt="Scuze Corgi" />
                            </div>
                        )}
                    </div>
                )}
            </div>
            <a href="https://calendar.app.google/EhKBRNhXaLpsN331A" className="calendar-link" target="_blank" rel="noopener noreferrer">
                Add to Calendar
            </a>
        </div>
    );
};

export default ValentinesIternary;