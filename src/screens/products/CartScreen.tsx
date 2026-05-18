import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';

export default function CartScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  return (
    <ScrollView className="flex-1 bg-slate-900 pt-12 px-4">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-slate-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-3xl font-bold ml-4">My Cart</Text>
      </View>

      {items.length === 0 ? (
        <View className="flex-1 justify-center items-center mt-20">
          <Ionicons name="cart-outline" size={64} color="#475569" />
          <Text className="text-slate-400 mt-4 text-lg">Your cart is empty</Text>
          <TouchableOpacity 
            className="bg-emerald-500 px-6 py-3 rounded-full mt-4"
            onPress={() => navigation.navigate('Main', { screen: 'Products' })}
          >
            <Text className="text-white font-bold">Shop Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {items.map((item) => (
            <View key={item.id} className="bg-slate-800 p-4 rounded-2xl mb-4 border border-slate-700 flex-row">
              <Image source={{ uri: item.image }} className="w-20 h-20 rounded-xl" />
              <View className="ml-4 flex-1 justify-between">
                <View>
                  <Text className="text-white font-bold text-base">{item.name}</Text>
                  <Text className="text-slate-400 text-sm">{item.brand}</Text>
                </View>
                <View className="flex-row justify-between items-center">
                  <Text className="text-emerald-500 font-bold text-lg">${item.price}</Text>
                  <View className="flex-row items-center space-x-2">
                    <TouchableOpacity 
                      onPress={() => dispatch(removeFromCart(item.id))}
                      className="bg-slate-700 p-1.5 rounded-full"
                    >
                      <Ionicons name="remove" size={16} color="white" />
                    </TouchableOpacity>
                    <Text className="text-white font-bold">{item.quantity}</Text>
                    <TouchableOpacity 
                      onPress={() => dispatch(addToCart(item))}
                      className="bg-slate-700 p-1.5 rounded-full"
                    >
                      <Ionicons name="add" size={16} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}

          {/* Total */}
          <View className="bg-slate-800 p-4 rounded-2xl border border-slate-700 mt-4">
            <View className="flex-row justify-between mb-2">
              <Text className="text-slate-400">Subtotal</Text>
              <Text className="text-white font-medium">${totalPrice.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-slate-400">Shipping</Text>
              <Text className="text-white font-medium">$0.00</Text>
            </View>
            <View className="border-t border-slate-700 my-2" />
            <View className="flex-row justify-between">
              <Text className="text-white font-bold text-lg">Total</Text>
              <Text className="text-emerald-500 font-bold text-lg">${totalPrice.toFixed(2)}</Text>
            </View>
          </View>

          <TouchableOpacity 
            className="bg-emerald-500 p-4 rounded-xl items-center mt-6 shadow-lg shadow-emerald-500/20 mb-8"
            onPress={() => navigation.navigate('Checkout')}
          >
            <Text className="text-white font-bold text-lg">Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      )}
      <View className="h-10" />
    </ScrollView>
  );
}
