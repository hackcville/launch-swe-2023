import { useState } from 'react';

const FormSection = ({ generateResponse }) => {
    const [newQuestion, setNewQuestion] = useState('');

    return (
        <div>
            <textarea
                rows="5"
                className="form-control"
                placeholder="Ask me anything..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
            ></textarea>

            <div>
                <button onClick={() => generateResponse(newQuestion, setNewQuestion)}>
                    Generate Response 🤖
                </button>
            </div>
        </div>
    )
}

export default FormSection;