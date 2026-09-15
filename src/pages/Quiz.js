import React, { useState } from 'react';

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'Berlin', isCorrect: false },
                { answerText: 'Madrid', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Lisbon', isCorrect: false },
            ],
        },
        {
            questionText: 'Which language is primarily used for web development?',
            answerOptions: [
                { answerText: 'Python', isCorrect: false },
                { answerText: 'JavaScript', isCorrect: true },
                { answerText: 'Java', isCorrect: false },
                { answerText: 'C#', isCorrect: false },
            ],
        },
        {
            questionText: 'What does HTML stand for?',
            answerOptions: [
                { answerText: 'Hyper Text Markup Language', isCorrect: true },
                { answerText: 'High Text Markup Language', isCorrect: false },
                { answerText: 'Hyper Tabular Markup Language', isCorrect: false },
                { answerText: 'Hyper Textual Markup Language', isCorrect: false },
            ],
        },
    ];

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            Question {currentQuestion + 1} of {questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;