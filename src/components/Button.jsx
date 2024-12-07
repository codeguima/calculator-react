import React from 'react';
import '../styles/Button.css';

const Button = ({ label, click, operation }) => (
    <button
        onClick={() => click(label)}
        className={`button ${operation ? 'operation' : ''}`}
    >
        {label}
    </button>
);

export default Button;
