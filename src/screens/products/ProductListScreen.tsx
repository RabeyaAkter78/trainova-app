import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mockProducts } from '../../mock/products';

export default function ProductListScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-900 pt-12 px-4">
      <Text className="text-white text-3xl font-bold mb-4">Shop Products</Text>
      
      {/* Search Bar */}
      <View className="flex-row items-center bg-slate-800 p-4 rounded-2xl mb-6 border border-slate-700">
        <Ionicons name="search" size={20} color="#64748b" />
        <TextInput 
          className="text-white ml-2 flex-1"
          placeholder="Search products or brands"
          placeholderTextColor="#64748b"
        />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
        {['All', 'Supplements', 'Equipment', 'Electronics', 'Apparel'].map((filter, index) => (
          <TouchableOpacity 
            key={index} 
            className={`px-4 py-2.5 rounded-xl mr-2 ${index === 0 ? 'bg-emerald-500' : 'bg-slate-800 border border-slate-700'}`}
          >
            <Text className={`font-bold text-sm ${index === 0 ? 'text-white' : 'text-slate-400'}`}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product Grid */}
      <View className="flex-row flex-wrap justify-between">
        {mockProducts.map((product) => (
          <TouchableOpacity key={product.id} className="bg-slate-800 p-4 rounded-2xl mb-4 border border-slate-700 w-[48%]">
            <Image source={{ uri: product.image }} className="w-full h-32 rounded-xl mb-3" />
            <Text className="text-white font-bold text-base" numberOfLines={1}>{product.name}</Text>
            <Text className="text-slate-400 text-xs mb-2">{product.brand}</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-emerald-500 font-bold text-base">${product.price}</Text>
              <TouchableOpacity className="bg-slate-700 p-1.5 rounded-full">
                <Ionicons name="cart-outline" size={16} color="#10b981" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View className="h-10" />
    </ScrollView>
  );
}
