import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/slices/cartSlice';
import { addOrder } from '../../redux/slices/ordersSlice';
import { RootState } from '../../redux/store';

export default function CheckoutScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const { items, totalPrice, totalCount } = useSelector((state: RootState) => state.cart);
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success

  const handlePlaceOrder = () => {
    const newOrder = {
      id: `ORD${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      total: totalPrice,
      items: totalCount,
      status: 'Processing',
    };
    dispatch(addOrder(newOrder));
    setStep(3);
    dispatch(clearCart());
  };

  return (
    <ScrollView className="flex-1 bg-slate-900 pt-12 px-4">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-slate-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-3xl font-bold ml-4">Checkout</Text>
      </View>

      {/* Progress Indicator */}
      <View className="flex-row justify-between mb-8 px-4">
        {['Shipping', 'Payment', 'Confirmation'].map((s, index) => (
          <View key={index} className="items-center flex-1">
            <View className={`w-8 h-8 rounded-full items-center justify-center ${step > index ? 'bg-emerald-500' : 'bg-slate-700'}`}>
              {step > index ? (
                <Ionicons name="checkmark" size={16} color="white" />
              ) : (
                <Text className="text-white font-bold text-xs">{index + 1}</Text>
              )}
            </View>
            <Text className={`text-xs mt-1 ${step > index ? 'text-white' : 'text-slate-500'}`}>{s}</Text>
          </View>
        ))}
      </View>

      {step === 1 && (
        <View className="space-y-4">
          <Text className="text-white text-xl font-bold mb-2">Shipping Address</Text>
          <View>
            <Text className="text-slate-400 mb-1 text-sm">Full Name</Text>
            <TextInput className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" placeholder="John Doe" placeholderTextColor="#64748b" />
          </View>
          <View>
            <Text className="text-slate-400 mb-1 text-sm">Address</Text>
            <TextInput className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" placeholder="123 Street Name" placeholderTextColor="#64748b" />
          </View>
          <View className="flex-row space-x-4">
            <View className="flex-1">
              <Text className="text-slate-400 mb-1 text-sm">City</Text>
              <TextInput className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" placeholder="New York" placeholderTextColor="#64748b" />
            </View>
            <View className="flex-1">
              <Text className="text-slate-400 mb-1 text-sm">Zip Code</Text>
              <TextInput className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" placeholder="10001" placeholderTextColor="#64748b" />
            </View>
          </View>
          <TouchableOpacity 
            className="bg-emerald-500 p-4 rounded-xl items-center mt-6 shadow-lg shadow-emerald-500/20"
            onPress={() => setStep(2)}
          >
            <Text className="text-white font-bold text-lg">Continue to Payment</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 2 && (
        <View className="space-y-4">
          <Text className="text-white text-xl font-bold mb-2">Payment Method</Text>
          <View className="bg-slate-800 p-4 rounded-xl border border-emerald-500 flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <Ionicons name="card" size={24} color="#10b981" />
              <Text className="text-white ml-3 font-medium">Credit Card</Text>
            </View>
            <Ionicons name="checkmark-circle" size={24} color="#10b981" />
          </View>
          <View>
            <Text className="text-slate-400 mb-1 text-sm">Card Number</Text>
            <TextInput className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" placeholder="**** **** **** 1234" placeholderTextColor="#64748b" keyboardType="numeric" />
          </View>
          <View className="flex-row space-x-4">
            <View className="flex-1">
              <Text className="text-slate-400 mb-1 text-sm">Expiry Date</Text>
              <TextInput className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" placeholder="MM/YY" placeholderTextColor="#64748b" />
            </View>
            <View className="flex-1">
              <Text className="text-slate-400 mb-1 text-sm">CVV</Text>
              <TextInput className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" placeholder="123" placeholderTextColor="#64748b" keyboardType="numeric" />
            </View>
          </View>
          <TouchableOpacity 
            className="bg-emerald-500 p-4 rounded-xl items-center mt-6 shadow-lg shadow-emerald-500/20"
            onPress={handlePlaceOrder}
          >
            <Text className="text-white font-bold text-lg">Place Order</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 3 && (
        <View className="flex-1 justify-center items-center mt-20">
          <Ionicons name="checkmark-circle" size={80} color="#10b981" />
          <Text className="text-white text-3xl font-bold mt-4">Order Placed!</Text>
          <Text className="text-slate-400 mt-2 text-center text-base">Thank you for your purchase. We will notify you when it ships.</Text>
          <TouchableOpacity 
            className="bg-emerald-500 px-8 py-4 rounded-full mt-8 shadow-lg shadow-emerald-500/20"
            onPress={() => navigation.navigate('Main', { screen: 'Home' })}
          >
            <Text className="text-white font-bold text-lg">Back to Home</Text>
          </TouchableOpacity>
        </View>
      )}
      <View className="h-10" />
    </ScrollView>
  );
}
