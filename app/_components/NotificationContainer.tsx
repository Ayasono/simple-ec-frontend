// NotificationContainer.tsx
import React from 'react';

interface NotificationProps {
	notifications: {
		id: number;
		message: string;
		type: 'success' | 'error' | 'warning';
	}[];
}

const NotificationContainer: React.FC<NotificationProps> = ({ notifications }) => {
	return (
		<div className="fixed bottom-5 right-5 flex flex-col space-y-2">
			{notifications.map((notification) => (
				<div key={notification.id} className={`p-4 border-l-4 rounded shadow-md ${
					notification.type === 'success' ? 'bg-green-100 border-green-500 text-green-700' :
						notification.type === 'error' ? 'bg-red-100 border-red-500 text-red-700' :
							'bg-yellow-100 border-yellow-500 text-yellow-700'
				}`}>
					{notification.message}
				</div>
			))}
		</div>
	);
};

export default NotificationContainer;
