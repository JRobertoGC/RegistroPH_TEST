import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../assets/images/LOGO_PATRONES.png';

const LoadingPage: React.FC = () => {
    return (
        <div className="bg-purple-300 min-h-screen flex flex-col items-center justify-center p-4">
            <img src={Logo} alt="Patrones Hermosos" className="mb-8 w-40 h-auto animate-spin-slow" />
            <h1 className="text-xl font-semibold mb-8 text-white animate-pulse">Cargando...</h1>
        </div>
    );
};

export default LoadingPage;