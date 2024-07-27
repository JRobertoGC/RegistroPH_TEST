import React, { useState, useEffect } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import AppRouter from './routes/router';
import { checkServerConnection } from './services/api'; // Importa la nueva función
import { LoadingPage, OfflinePage } from './pages/index';

function App() {
    const [isConnected, setIsConnected] = useState<boolean | null>(null);

    useEffect(() => {
        const checkConnection = async () => {
            const isConnected = await checkServerConnection();
            setIsConnected(isConnected);

            if (!isConnected) {
                toast.error('Error al conectar con el servidor.');
            }
        };

        checkConnection();
    }, []);

    if (isConnected === null) {
        return <LoadingPage/>; // Puede ser una pantalla de carga mientras se verifica la conexión
    }

    return (
        <div className="bg-[#F8F8F8]">
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
            {isConnected ? <AppRouter /> : <OfflinePage />}
        </div>
    );
}

export default App;
