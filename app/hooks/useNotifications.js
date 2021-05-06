import { useEffect } from 'react';
import * as Notification from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushTokensApi from '../api/expoPushTokens';

const useNotifications = (notificationListener) => {
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
      const token = await Notification.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log('Error getting a push token', error);
    }
  };

  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notification.addNotificationReceivedListener(notificationListener);
  }, []);
};

export default useNotifications;
