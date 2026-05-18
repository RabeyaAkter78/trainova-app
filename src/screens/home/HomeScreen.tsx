import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mockTrainers } from '../../mock/trainers';
import { mockProducts } from '../../mock/products';

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView className="flex-1 bg-slate-900 pt-12 px-4">
      {/* Greeting Section */}
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="text-slate-400 text-sm">Welcome back,</Text>
          <Text className="text-white text-2xl font-bold">Alex Smith</Text>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity 
            className="w-10 h-10 bg-slate-800 rounded-full items-center justify-center border border-slate-700 mr-3 relative"
            onPress={() => navigation.navigate('Notifications')}
          >
            <Ionicons name="notifications-outline" size={20} color="white" />
            <View className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full" />
          </TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 bg-slate-800 rounded-full items-center justify-center border border-slate-700">
            <Text className="text-white font-bold">AS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats Cards */}
      <View className="flex-row justify-between mb-6">
        <View className="bg-slate-800 p-4 rounded-2xl w-[48%] border border-slate-700">
          <Text className="text-slate-400 text-xs font-medium">Calories Burned</Text>
          <Text className="text-white text-2xl font-bold mt-1">1,240</Text>
          <Text className="text-emerald-500 text-xs mt-1 font-medium">+12% today</Text>
        </View>
        <View className="bg-slate-800 p-4 rounded-2xl w-[48%] border border-slate-700">
          <Text className="text-slate-400 text-xs font-medium">Workout Time</Text>
          <Text className="text-white text-2xl font-bold mt-1">45 min</Text>
          <Text className="text-emerald-500 text-xs mt-1 font-medium">On track</Text>
        </View>
      </View>

      {/* Recommended Trainers */}
      <View className="mb-6">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-white text-lg font-bold">Recommended Trainers</Text>
          <TouchableOpacity>
            <Text className="text-emerald-500 text-sm font-medium">See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mockTrainers.map((trainer) => (
            <TouchableOpacity 
              key={trainer.id} 
              className="bg-slate-800 p-4 rounded-2xl mr-4 w-60 border border-slate-700"
              onPress={() => navigation.navigate('TrainerDetails', { trainer })}
            >
              <Image source={{ uri: trainer.image }} className="w-full h-32 rounded-xl mb-3" />
              <Text className="text-white font-bold text-base">{trainer.name}</Text>
              <Text className="text-slate-400 text-sm">{trainer.specialty}</Text>
              <View className="flex-row justify-between items-center mt-2">
                <Text className="text-emerald-500 font-bold">${trainer.price}/h</Text>
                <View className="flex-row items-center">
                  <Text className="text-yellow-400 text-sm">⭐</Text>
                  <Text className="text-slate-400 text-sm ml-1">{trainer.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Trending Products */}
      <View className="mb-8">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-white text-lg font-bold">Trending Products</Text>
          <TouchableOpacity>
            <Text className="text-emerald-500 text-sm font-medium">See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mockProducts.map((product) => (
            <TouchableOpacity 
              key={product.id} 
              className="bg-slate-800 p-4 rounded-2xl mr-4 w-48 border border-slate-700"
              onPress={() => navigation.navigate('ProductDetails', { product })}
            >
              <Image source={{ uri: product.image }} className="w-full h-24 rounded-xl mb-3" />
              <Text className="text-white font-bold" numberOfLines={1}>{product.name}</Text>
              <Text className="text-slate-400 text-sm">{product.brand}</Text>
              <View className="flex-row justify-between items-center mt-2">
                <Text className="text-emerald-500 font-bold">${product.price}</Text>
                <View className="flex-row items-center">
                  <Text className="text-yellow-400 text-sm">⭐</Text>
                  <Text className="text-slate-400 text-sm ml-1">{product.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
