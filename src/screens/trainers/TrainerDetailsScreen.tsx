import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TrainerDetailsScreen({ route, navigation }: any) {
  const { trainer } = route.params;

  return (
    <ScrollView className="flex-1 bg-slate-900">
      {/* Header with Back Button */}
      <View className="flex-row justify-between items-center px-6 pt-12 pb-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-slate-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-slate-800 p-2 rounded-full">
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Trainer Image & Info */}
      <View className="items-center px-6 mt-4">
        <Image source={{ uri: trainer.image }} className="w-40 h-40 rounded-full border-4 border-emerald-500" />
        <Text className="text-white text-3xl font-bold mt-4">{trainer.name}</Text>
        <Text className="text-emerald-500 text-lg font-medium mt-1">{trainer.specialty}</Text>
        
        <View className="flex-row items-center mt-2">
          <Ionicons name="star" size={18} color="#fbbf24" />
          <Text className="text-white font-bold ml-1">{trainer.rating}</Text>
          <Text className="text-slate-400 ml-1">({trainer.reviews} reviews)</Text>
        </View>
      </View>

      {/* Bio */}
      <View className="px-6 mt-6">
        <Text className="text-white text-xl font-bold mb-2">About</Text>
        <Text className="text-slate-400 text-base leading-6">{trainer.bio}</Text>
      </View>

      {/* Pricing & Actions */}
      <View className="px-6 mt-8 mb-8 flex-row justify-between items-center">
        <View>
          <Text className="text-slate-400 text-sm">Hourly Rate</Text>
          <Text className="text-white text-3xl font-bold">${trainer.price}</Text>
        </View>
        <View className="flex-row space-x-3">
          <TouchableOpacity 
            className="bg-slate-800 p-4 rounded-full border border-slate-700"
            onPress={() => navigation.navigate('Message', { trainer })}
          >
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#10b981" />
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-emerald-500 px-8 py-4 rounded-full flex-row items-center shadow-lg shadow-emerald-500/20"
            onPress={() => Alert.alert('Booking', 'Trainer booked successfully!')}
          >
            <Text className="text-white font-bold text-lg">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="h-10" />
    </ScrollView>
  );
}
