import React from 'react';
import './App.css' 
import ChatBot from './Components/ChatBot.js';

const App = () => {
    return (
        <div className='all'>
            <div>
                <h1>ChatGPT Clone 🤖</h1>
                <p>
                    I am an automated question and answer system, designed to assist you
                    in finding relevant information. You are welcome to ask me any
                    queries you may have, and I will do my utmost to offer you a
                    reliable response. Kindly keep in mind that I am a machine and
                    operate solely based on programmed algorithms.
                </p>
            </div>
            
            <ChatBot />

        </div>
    );
};

export default App;
