import { useState } from 'react';

// 定义通知的类型
interface Notification {
	id: number;
	message: string;
	type: 'success' | 'error' | 'warning';
}

// useNotification的返回类型
interface UseNotificationReturn {
	addNotification: (message: string, type: Notification['type']) => void;
	notifications: Notification[];
}

const useNotification = (): UseNotificationReturn => {
	const [notifications, setNotifications] = useState<Notification[]>([]);

	const addNotification = (message: string, type: Notification['type']) => {
		const id = Date.now();

		setNotifications((prevNotifications) => [
			...prevNotifications,
			{ id, message, type }
		]);

		setTimeout(() => {
			setNotifications((prevNotifications) =>
				prevNotifications.filter(notification => notification.id !== id)
			);
		}, 3000); // 3秒后消失
	};

	return { addNotification, notifications };
};

export default useNotification;
