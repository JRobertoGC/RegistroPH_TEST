// src/store/notification-context.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Notification {
    id: number;
    type: 'success' | 'error' | 'warning';
    message: string;
}

interface NotificationContextType {
    notifications: Notification[];
    addNotification: (type: 'success' | 'error' | 'warning', message: string) => void;
    removeNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const addNotification = (type: 'success' | 'error' | 'warning', message: string) => {
        const id = new Date().getTime();
        setNotifications((prevNotifications) => [...prevNotifications, { id, type, message }]);
    };

    const removeNotification = (id: number) => {
        setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotificationContext = () => {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotificationContext must be used within a NotificationProvider');
    }
    return context;
};
