// SearchInput.tsx
import React from 'react';
import { SearchInputProps } from './types';
import SearchIcon from '../../assets/icons/Girl.svg'; // Asegúrate de que la ruta es correcta

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, onChange, onKeyDown }) => {
    return (
        <div className="relative w-full">
            <input
                type="text"
                className="w-full pl-12 py-4 rounded-full text-lg leading-normal bg-white shadow-sm focus:outline-none"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={onKeyDown}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={SearchIcon} alt="Search" className="h-8 w-8 text-gray-400" />
            </div>
        </div>
    );
};

export default SearchInput;
