import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './ValentinesPlease.scss';

interface ClampFunction {
    (value: number, min: number, max: number): number;
}

const clamp: ClampFunction = function(value, min, max) {
    return Math.min(Math.max(value, min), max);
};

const ValentinesPlease: React.FC = () => {
    const controls = useAnimation();
const [showCorgi, setShowCorgi] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const buttonWidth = 100; // Approximate width of the button
            const buttonHeight = 50; // Approximate height of the button
            const maxX = window.innerWidth - buttonWidth;
            const maxY = window.innerHeight - buttonHeight;
            const dx = Math.random() < 0.5 ? 1 : -1;
            const dy = Math.random() < 0.5 ? 1 : -1;

            controls.start({
                x: clamp(Math.random() * maxX * dx, -maxX, maxX),
                y: clamp(Math.random() * maxY * dy, -maxY, maxY),
                transition: {
                    duration: 0.5,
                    ease: 'circInOut'
                }
            });
        }, 800);

        return () => clearInterval(interval);
    }, [controls]);

    const handleNoClick = () => {
        setShowCorgi(true);
        setTimeout(() => {
            setShowCorgi(false);
        }, 3000);
    };

    return (
        <div className="valentines-please-container">
<img src="/gifs/dog-smile.gif" alt="Dog Smile" className="dog-smile" />
            <h2>Would you be my Valentines?</h2>
            <div className="buttons-container">
                <button className="yes-button">Yes</button>
                <motion.button
                    className="no-button"
                    animate={controls}
onClick={handleNoClick}
                >
                    No
                </motion.button>
            </div>
{showCorgi && (
                <motion.div
                    className="corgi-container"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/gifs/scuze-corgi.gif" alt="Scuze Corgi" />
                    <p>Nice try buddy</p>
                </motion.div>
            )}
        </div>
    );
};

export default ValentinesPlease;