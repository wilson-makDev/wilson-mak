import React, { useState } from 'react';
import './ValentinesMainComponent.scss';
import SecurityQuestions from './SecurityQuestions';

const ValentinesMainComponent: React.FC = () => {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showGif, setShowGif] = useState(false);
    const [showHappyGif, setShowHappyGif] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        if (password === 'awaawa') {
            setMessage('ITS YOUUU');
            setShowHappyGif(true);
            setTimeout(() => {
                setShowHappyGif(false);
                setIsSubmitting(false);
                setIsAuthenticated(true);
            }, 5000);
        } else {
            setMessage('Incorrect password. Please try again.');
            setShowGif(true);
            setTimeout(() => {
                setShowGif(false);
                setIsSubmitting(false);
            }, 5000);
        }
    };

    if (isAuthenticated) {
        return <SecurityQuestions />;
    }

    return (
        <div className="valentines-theme">
            <div className="valentines-container">
                <div className="header-container">
                    <h1>OMG...it&apos;s already Valentines</h1>
                    <img src='/gifs/stellarnushu.gif' alt='Valentine Gif' />
                </div>
                <h2>Is this my hotcaked baddie?</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </form>
                {message && <p>{message}</p>}
                {showGif && <img src='/gifs/angry-cat-meme-cat.gif' alt='Angry Cat' className="angry-cat" />}
                {showHappyGif && <img src='/gifs/happy-cat-happy-happy-cat.gif' alt='Happy Cat' className="happy-cat" />}
            </div>
        </div>
    );
};

export default ValentinesMainComponent;