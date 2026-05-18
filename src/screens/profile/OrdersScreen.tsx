import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function OrdersScreen({ navigation }: any) {
  const { orders } = useSelector((state: RootState) => state.orders);

  // Calculate some analytics
  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
  const totalItems = orders.reduce((sum, order) => sum + order.items, 0);

  return (
    <ScrollView className="flex-1 bg-slate-900 pt-12 px-4">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-slate-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-3xl font-bold ml-4">My Orders</Text>
      </View>

      {/* Analytics Cards */}
      <View className="flex-row justify-between mb-6">
        <View className="bg-slate-800 p-4 rounded-2xl w-[48%] border border-slate-700">
          <Text className="text-slate-400 text-xs font-medium">Total Spent</Text>
          <Text className="text-emerald-500 text-2xl font-bold mt-1">${totalSpent.toFixed(2)}</Text>
        </View>
        <View className="bg-slate-800 p-4 rounded-2xl w-[48%] border border-slate-700">
          <Text className="text-slate-400 text-xs font-medium">Total Products</Text>
          <Text className="text-white text-2xl font-bold mt-1">{totalItems}</Text>
        </View>
      </View>

      <Text className="text-white text-xl font-bold mb-4">Order History</Text>

      {/* Analytics Table */}
      <View className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden mb-6">
        {/* Table Header */}
        <View className="flex-row bg-slate-700/50 p-4">
          <Text className="text-slate-300 font-bold flex-1 text-xs">ORDER ID</Text>
          <Text className="text-slate-300 font-bold flex-1 text-xs">DATE</Text>
          <Text className="text-slate-300 font-bold w-16 text-xs text-center">ITEMS</Text>
          <Text className="text-slate-300 font-bold w-20 text-xs text-right">TOTAL</Text>
        </View>

        {/* Table Rows */}
        {orders.length === 0 ? (
          <View className="p-4 items-center">
            <Text className="text-slate-400">No orders yet</Text>
          </View>
        ) : (
          orders.map((order, index) => (
            <View 
              key={order.id} 
              className={`flex-row p-4 border-b border-slate-700 ${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/50'}`}
            >
              <Text className="text-white font-medium flex-1 text-sm">{order.id}</Text>
              <Text className="text-slate-400 flex-1 text-sm">{order.date}</Text>
              <Text className="text-white w-16 text-sm text-center">{order.items}</Text>
              <Text className="text-emerald-500 font-bold w-20 text-sm text-right">${order.total.toFixed(2)}</Text>
            </View>
          ))
        )}
      </View>
      <View className="h-10" />
    </ScrollView>
  );
}
