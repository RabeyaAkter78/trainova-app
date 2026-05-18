import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const initialNotifications = [
  { id: 1, title: 'Workout Reminder', message: 'Time for your daily workout! Let\'s crush it today.', time: '10m ago', read: false },
  { id: 2, title: 'New Message', message: 'Trainer John sent you a message regarding your schedule.', time: '1h ago', read: false },
  { id: 3, title: 'Payment Success', message: 'Your monthly subscription was renewed successfully.', time: '2h ago', read: true },
  { id: 4, title: 'Goal Achieved!', message: 'Congratulations! You reached your weekly calorie goal.', time: '1d ago', read: true },
];

export default function NotificationScreen() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    Alert.alert('Success', 'Notification marked as read!');
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
    Alert.alert('Success', 'Notification deleted!');
  };

  return (
    <ScrollView className="flex-1 bg-slate-900 pt-12 px-4">
      <View className="flex-row items-center mb-6">
        <Text className="text-white text-3xl font-bold">Notifications</Text>
        <View className="bg-emerald-500 px-2.5 py-1 rounded-full ml-3">
          <Text className="text-white text-xs font-bold">
            {notifications.filter(n => !n.read).length}
          </Text>
        </View>
      </View>
      
      {notifications.length === 0 ? (
        <View className="flex-1 justify-center items-center mt-20">
          <Ionicons name="notifications-off-outline" size={64} color="#475569" />
          <Text className="text-slate-400 mt-4 text-lg">No notifications yet</Text>
        </View>
      ) : (
        notifications.map((notif) => (
          <View 
            key={notif.id} 
            className={`bg-slate-800 p-4 rounded-2xl mb-4 border ${notif.read ? 'border-slate-700' : 'border-emerald-500/30'}`}
          >
            <View className="flex-row justify-between items-start">
              <View className="flex-1 mr-2">
                <View className="flex-row items-center">
                  {!notif.read && <View className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />}
                  <Text className="text-white font-bold text-base">{notif.title}</Text>
                </View>
                <Text className="text-slate-400 text-sm mt-1">{notif.message}</Text>
                <Text className="text-slate-500 text-xs mt-2">{notif.time}</Text>
              </View>
              <View className="flex-row space-x-2">
                {!notif.read && (
                  <TouchableOpacity 
                    onPress={() => markAsRead(notif.id)} 
                    className="bg-emerald-500/10 p-2 rounded-full"
                  >
                    <Ionicons name="checkmark" size={16} color="#10b981" />
                  </TouchableOpacity>
                )}
                <TouchableOpacity 
                  onPress={() => deleteNotification(notif.id)} 
                  className="bg-red-500/10 p-2 rounded-full"
                >
                  <Ionicons name="trash-outline" size={16} color="#ef4444" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))
      )}
      <View className="h-10" />
    </ScrollView>
  );
}
