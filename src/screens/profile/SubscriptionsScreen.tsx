import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockSubscriptions = [
  { id: 1, gymName: 'Apex Fitness Hub', plan: 'Monthly', price: 50, status: 'Active', renewalDate: '2026-06-18' },
  { id: 2, gymName: 'Iron Temple Gym', plan: 'Annual', price: 400, status: 'Expired', renewalDate: '2026-05-10' },
];

export default function SubscriptionsScreen({ navigation }: any) {
  return (
    <ScrollView className="flex-1 bg-slate-900 pt-12 px-4">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-slate-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-3xl font-bold ml-4">My Subscriptions</Text>
      </View>

      {mockSubscriptions.map((sub) => (
        <View key={sub.id} className="bg-slate-800 p-4 rounded-2xl mb-4 border border-slate-700">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-white font-bold text-lg">{sub.gymName}</Text>
              <Text className="text-slate-400 text-sm mt-0.5">{sub.plan} Plan</Text>
            </View>
            <View className={`px-2.5 py-1 rounded-full ${sub.status === 'Active' ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
              <Text className={`text-xs font-bold ${sub.status === 'Active' ? 'text-emerald-500' : 'text-red-500'}`}>
                {sub.status}
              </Text>
            </View>
          </View>

          <View className="border-t border-slate-700 my-3" />

          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-slate-500 text-xs">Price</Text>
              <Text className="text-white font-bold mt-0.5">${sub.price}</Text>
            </View>
            <View>
              <Text className="text-slate-500 text-xs text-right">Renewal Date</Text>
              <Text className="text-white font-bold mt-0.5 text-right">{sub.renewalDate}</Text>
            </View>
          </View>

          <View className="flex-row mt-4 space-x-3">
            {sub.status === 'Active' ? (
              <TouchableOpacity 
                className="flex-1 bg-red-500/10 p-3 rounded-xl items-center"
                onPress={() => Alert.alert('Cancel Subscription', 'Are you sure you want to cancel your subscription to ' + sub.gymName + '?')}
              >
                <Text className="text-red-500 font-bold text-sm">Cancel Plan</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                className="flex-1 bg-emerald-500 p-3 rounded-xl items-center"
                onPress={() => Alert.alert('Renew Subscription', 'Redirecting to checkout for renewal...')}
              >
                <Text className="text-white font-bold text-sm">Renew Plan</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity className="flex-1 bg-slate-700 p-3 rounded-xl items-center">
              <Text className="text-white font-bold text-sm">View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <View className="h-10" />
    </ScrollView>
  );
}
