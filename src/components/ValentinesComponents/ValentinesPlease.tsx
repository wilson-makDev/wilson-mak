import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSprings, animated } from '@react-spring/web';
import ValentinesIternary from './ValentinesIternary';
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
    const [falling, setFalling] = useState(false);
    const [showCatBop, setShowCatBop] = useState(false);
    const [navigate, setNavigate] = useState(false);

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

    const handleYesClick = () => {
        setFalling(true);
        setTimeout(() => {
            setShowCatBop(true);
setTimeout(() => {
                setNavigate(true);
            }, 3000);
        }, 2000);
    };

    const elements = [
        <img src="/gifs/dog-smile.gif" alt="Dog Smile" className="dog-smile" key="dog-smile"/>,
        <h2 key="valentines-question">Would you be my Valentines?</h2>,
        <button className="yes-button" onClick={handleYesClick} key="yes-button">Yes</button>,
        <motion.button className="no-button" animate={controls} onClick={handleNoClick} key="no-button">No</motion.button>
    ];

    const [springs, api] = useSprings(elements.length, index => ({
        from: { y: 0, opacity: 1 },
        to: { y: falling ? window.innerHeight + 100 : 0, opacity: falling ? 0 : 1 },
        config: { mass: 1, tension: 280, friction: 60 }
    }));

    useEffect(() => {
        if (falling) {
            api.start((index) => ({
                to: async (next) => {
                    await next({ y: window.innerHeight + 100, opacity: 0 });
                }
            }));
        }
    }, [falling, api]);

    if (navigate) {
        return <ValentinesIternary />;
    }

    return (
        <div className="valentines-please-container">
{springs.map((style, index) => (
                <animated.div key={index} style={style}>
                    {elements[index]}
                </animated.div>
            ))}
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
{showCatBop && (
                <motion.div
                    className="cat-bop-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src="/gifs/cat-bop.gif" alt="Cat Bop" />
                    <p>LETS GOOO</p>
                </motion.div>
            )}
        </div>
    );
};

export default ValentinesPlease;