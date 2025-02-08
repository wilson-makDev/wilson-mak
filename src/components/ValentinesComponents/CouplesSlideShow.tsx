import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import './CouplesSlideShow.scss';

const images = [
    '/images/couple1.jpg',
    '/images/couple2.jpg',
    '/images/couple3.jpg',
    '/images/couple4.jpg'
];

const CouplesSlideShow: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const transitions = useTransition(index, {
        keys: index,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 1000 } // Fade duration
    });

    return (
        <div className="slideshow-container">
            {transitions((style, i) => (
                <animated.img
                    key={i}
                    src={images[i]}
                    alt={`Couple ${i + 1}`}
                    style={style}
                    className="slideshow-image"
                />
            ))}
        </div>
    );
};

export default CouplesSlideShow;