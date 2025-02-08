import React, { useState } from 'react';
import ValentinesPlease from './ValentinesPlease';
import './SecurityQuestions.scss';

type Questions = 'question1' | 'question2' | 'question3';

const SecurityQuestions: React.FC = () => {
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: ''
    });
    const [showHappyGif, setShowHappyGif] = useState(false);
    const [showFinalMessage, setShowFinalMessage] = useState(false);
    const [showValentinesPlease, setShowValentinesPlease] = useState(false);

    const correctAnswers = {
        question1: 'blue',
        question2: 'medieval times',
        question3: 'amber'
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAnswers({
            ...answers,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowHappyGif(true);
        setTimeout(() => {
            setShowHappyGif(false);
            setShowFinalMessage(true);
            setTimeout(() => {
                setShowFinalMessage(false);
                setShowValentinesPlease(true);
            }, 3000);
        }, 5000);
    };

    const isCorrect = (question: Questions, answer: string) => answer.trim().toLowerCase() === correctAnswers[question];

    const allCorrect = isCorrect('question1', answers.question1) &&
                       isCorrect('question2', answers.question2) &&
                       isCorrect('question3', answers.question3);

    if (showValentinesPlease) {
        return <ValentinesPlease />;
    }

    return (
        <div className="valentines-theme">
            <div className="security-questions-container">
                <h2>Are you sure you&apos;re really Sarah?</h2>
                <p>Please answer the following security questions:</p>
                <form onSubmit={handleSubmit}>
                    <div className="question-container">
                        <label htmlFor="question1">What is your favorite color?</label>
                        <input
                            type="text"
                            id="question1"
                            name="question1"
                            value={answers.question1}
                            onChange={handleChange}
                        />
                        {isCorrect('question1', answers.question1) && <span className="check-mark">✔</span>}
                    </div>
                    <div className="question-container">
                        <label htmlFor="question2">Where was our first date?</label>
                        <input
                            type="text"
                            id="question2"
                            name="question2"
                            value={answers.question2}
                            onChange={handleChange}
                        />
                        {isCorrect('question2', answers.question2) && <span className="check-mark">✔</span>}
                    </div>
                    <div className="question-container">
                        <label htmlFor="question3">Sunlight through  _ _ _ _ _? (Eyes)</label>
                        <input
                            type="text"
                            id="question3"
                            name="question3"
                            value={answers.question3}
                            onChange={handleChange}
                        />
                        {isCorrect('question3', answers.question3) && <span className="check-mark">✔</span>}
                    </div>
                    {allCorrect && <button type="submit">Submit</button>}
                </form>
                {showHappyGif && <img src='/gifs/happy-cat-happy-happy-cat.gif' alt='Happy Cat' className="happy-cat" />}
                {showFinalMessage && <p>I have a question....</p>}
            </div>
        </div>
    );
};

export default SecurityQuestions;