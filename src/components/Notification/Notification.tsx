// src/components/Notification/Notification.tsx
import React, { useEffect, useState } from 'react';

interface NotificationProps {
    message: string;
    onClose: () => void;
    duration?: number; // duración de la notificación en milisegundos
}

const Notification: React.FC<NotificationProps> = ({ message, onClose, duration = 3000 }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => prev + 100 / (duration / 100));
        }, 100);

        const timer = setTimeout(onClose, duration); // La notificación desaparecerá después de 5 segundos

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onClose, duration]);

    return (
        <div className="flex flex-col items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400" role="alert">
            <div className="flex items-center w-full">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                    </svg>
                </div>
                <div className="ms-3 text-sm font-normal">{message}</div>
                <button
                    type="button"
                    className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={onClose}
                >
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
            <div className="w-full h-1 bg-gray-200 rounded-full mt-2">
                <div className="h-1 bg-red-500 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default Notification;
