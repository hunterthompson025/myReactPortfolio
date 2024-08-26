import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        if (!value) {
            setErrorMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
            return;
        }

        if (name === 'email' && value && !validateEmail(value)) {
            setErrorMessage('Invalid email address.');
            return;
        }

        setErrorMessage('');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMessage('Name is required.');
            return;
        }

        if (!email || !validateEmail(email)) {
            setErrorMessage('Email is either blank or invalid.');
            return;
        }

        if (!message) {
            setErrorMessage('Message is required.');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div>
            <h2 className="text-start mt-5">Contact</h2>
            <form className="text-start mb-3" onSubmit={handleFormSubmit}>
                <div className="text-start mb-3">
                    <label htmlFor="name" className="form-label text-start">Name:</label>
                    <input
                        type="text"
                        className="form-control w-50"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="text-start mb-3">
                    <label htmlFor="email" className="form-label">Email address:</label>
                    <input
                        type="email"
                        className="form-control w-50"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="text-start mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea
                        className="form-control w-50"
                        id="message"
                        name="message"
                        rows="3"
                        value={message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-5">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text text-start">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Form;
