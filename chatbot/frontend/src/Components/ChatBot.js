import React, { useState } from 'react';
import axios from 'axios';
import FormSection from "./FormSection.js";
import AnswerSection from './AnswerSection.js';

const ChatBot = () => {
    const [storedValues, setStoredValues] = useState([]);

    const generateResponse = async (newQuestion, setNewQuestion) => {
        try {
            const response = await axios.post('/api/completions', { prompt: newQuestion });

            setStoredValues([
                {
                    question: newQuestion,
                    answer: response.data,
                },
                ...storedValues,
            ]);
            setNewQuestion('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <FormSection generateResponse={generateResponse} />

            <AnswerSection storedValues={storedValues} />
        </div>
    );
};

export default ChatBot;
