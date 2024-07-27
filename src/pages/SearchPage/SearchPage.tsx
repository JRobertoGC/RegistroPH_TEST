import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import Button from '../../components/Button/Button';
import Logo from '../../assets/images/LOGO_PATRONES.png';
import { searchParticipants } from '../../services/api';

const SearchPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            toast.warn('Por favor ingresa el nombre o apellido de una participante');
            return;
        }

        try {
            const results = await searchParticipants(searchTerm);
            toast.success('Participantes encontrados');
            setTimeout(() => {
                navigate('/results', { state: { participants: results } });
            }, 1000); // Retraso de 2 segundos antes de la navegación
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                toast.warn('No se encontró a ninguna participante');
            } else {
                toast.error('Error al buscar participantes');
            }
            console.error('Error al buscar participantes:', error);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="bg-purple-300 min-h-screen flex flex-col items-center justify-center p-4">
            <img src={Logo} alt="Patrones Hermosos" className="mb-8 max-w-36" />
            <h1 className="text-5xl font-semibold mb-8 text-white">PATRONES HERMOSOS {currentYear}</h1>
            <div className="flex flex-col items-center w-full max-w-md">
                <SearchInput
                    placeholder="Buscar participantes"
                    value={searchTerm}
                    onChange={setSearchTerm}
                    onKeyDown={handleKeyDown}
                />
                <Button
                    label="Buscar"
                    onClick={handleSearch}
                />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </div>
    );
};

export default SearchPage;


