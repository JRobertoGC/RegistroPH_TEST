// Button.tsx
import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow m-4"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
