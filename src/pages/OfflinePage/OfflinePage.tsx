import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../assets/images/LOGO_PATRONES.png';

const OfflinePage: React.FC = () => {
    return (
        <div className="bg-purple-300 min-h-screen flex flex-col items-center justify-center p-4">
            <img src={Logo} alt="Patrones Hermosos" className="mb-8 w-40 h-auto" />
            <h1 className="text-5xl font-semibold mb-8 text-white animate-bounce">HASTA LA PROXIMA EDICIÓN</h1>
        </div>
    );
};

export default OfflinePage;
