import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mockTrainers } from '../../mock/trainers';

export default function TrainerListScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-900 pt-12 px-4">
      <Text className="text-white text-3xl font-bold mb-4">Find Trainers</Text>
      
      {/* Search Bar */}
      <View className="flex-row items-center bg-slate-800 p-4 rounded-2xl mb-6 border border-slate-700">
        <Ionicons name="search" size={20} color="#64748b" />
        <TextInput 
          className="text-white ml-2 flex-1"
          placeholder="Search by name or specialty"
          placeholderTextColor="#64748b"
        />
      </View>

      {/* Filters */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
        {['All', 'Bodybuilding', 'Yoga', 'HIIT', 'Nutrition'].map((filter, index) => (
          <TouchableOpacity 
            key={index} 
            className={`px-4 py-2.5 rounded-xl mr-2 ${index === 0 ? 'bg-emerald-500' : 'bg-slate-800 border border-slate-700'}`}
          >
            <Text className={`font-bold text-sm ${index === 0 ? 'text-white' : 'text-slate-400'}`}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Trainer Cards */}
      {mockTrainers.map((trainer) => (
        <TouchableOpacity key={trainer.id} className="bg-slate-800 p-4 rounded-2xl mb-4 border border-slate-700">
          <View className="flex-row">
            <Image source={{ uri: trainer.image }} className="w-24 h-24 rounded-xl" />
            <View className="ml-4 flex-1 justify-between">
              <View>
                <View className="flex-row justify-between items-center">
                  <Text className="text-white font-bold text-lg">{trainer.name}</Text>
                  <TouchableOpacity>
                    <Ionicons name="heart-outline" size={20} color="#64748b" />
                  </TouchableOpacity>
                </View>
                <Text className="text-slate-400 text-sm mt-0.5">{trainer.specialty}</Text>
                <Text className="text-slate-500 text-xs mt-1" numberOfLines={1}>{trainer.location}</Text>
              </View>
              
              <View className="flex-row justify-between items-center mt-2">
                <Text className="text-emerald-500 font-bold text-base">${trainer.price}/h</Text>
                <View className="flex-row items-center bg-slate-700/50 px-2.5 py-1 rounded-full">
                  <Ionicons name="star" size={14} color="#fbbf24" />
                  <Text className="text-slate-300 text-xs font-bold ml-1">{trainer.rating}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
      <View className="h-10" />
    </ScrollView>
  );
}
