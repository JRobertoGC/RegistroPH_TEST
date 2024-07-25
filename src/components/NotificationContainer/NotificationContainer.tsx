// src/components/Notification/NotificationContainer.tsx
import React from 'react';
import { useNotificationContext } from '../../store/notification-context';
import Notification from '..//Notification/Notification';

const NotificationContainer: React.FC = () => {
    const { notifications, removeNotification } = useNotificationContext();

    return (
        <div className="fixed top-4 right-4 flex flex-col space-y-4">
            {notifications.map((notification) => (
                <Notification
                    key={notification.id}
                    message={notification.message}
                    onClose={() => removeNotification(notification.id)}
                />
            ))}
        </div>
    );
};

export default NotificationContainer;
