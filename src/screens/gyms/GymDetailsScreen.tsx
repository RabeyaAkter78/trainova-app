import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GymDetailsScreen({ route, navigation }: any) {
  const { gym } = route.params;
  const [isJoinModalVisible, setIsJoinModalVisible] = useState(false);
  
  // Form State
  const [name, setName] = useState('Alex Smith');
  const [email, setEmail] = useState('alex.smith@example.com');
  const [phone, setPhone] = useState('+1 234 567 890');
  const [membershipType, setMembershipType] = useState('Monthly');

  const handleSubmit = () => {
    setIsJoinModalVisible(false);
    Alert.alert(
      'Success',
      `Your request to join ${gym.name} as a ${membershipType} member has been submitted!`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <ScrollView className="flex-1 bg-slate-900">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 pt-12 pb-4 absolute top-0 left-0 right-0 z-10">
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-slate-900/80 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-slate-900/80 p-2 rounded-full">
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Gym Image */}
      <Image source={{ uri: gym.image }} className="w-full h-80" resizeMode="cover" />

      {/* Gym Info */}
      <View className="p-6 bg-slate-900 -mt-6 rounded-t-3xl">
        <Text className="text-white text-3xl font-bold mt-1">{gym.name}</Text>
        <Text className="text-slate-400 text-sm mt-1">{gym.location}</Text>
        
        <View className="flex-row items-center mt-2">
          <Ionicons name="star" size={18} color="#fbbf24" />
          <Text className="text-white font-bold ml-1">{gym.rating}</Text>
          <Text className="text-slate-400 ml-1">({gym.reviews} reviews)</Text>
        </View>

        <Text className="text-emerald-500 text-3xl font-bold mt-4">${gym.price}/mo</Text>

        {/* Amenities */}
        <Text className="text-white text-xl font-bold mt-6 mb-2">Amenities</Text>
        <View className="flex-row flex-wrap gap-2">
          {gym.amenities.map((amenity: string, index: number) => (
            <View key={index} className="bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
              <Text className="text-slate-300 text-sm font-medium">{amenity}</Text>
            </View>
          ))}
        </View>

        <Text className="text-white text-xl font-bold mt-6 mb-2">About</Text>
        <Text className="text-slate-300 text-base leading-6">
          Experience best-in-class fitness equipment, expert trainers, and a motivating community. This facility offers everything you need to reach your peak performance.
        </Text>

        {/* Action Button */}
        <TouchableOpacity 
          className="bg-emerald-500 p-4 rounded-xl items-center justify-center shadow-lg shadow-emerald-500/20 mt-8 mb-8"
          onPress={() => setIsJoinModalVisible(true)}
        >
          <Text className="text-white font-bold text-lg">Join This Gym</Text>
        </TouchableOpacity>
      </View>

      {/* Join Gym Modal */}
      <Modal visible={isJoinModalVisible} animationType="slide" transparent>
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-slate-900 p-6 rounded-t-3xl border-t border-slate-800">
            <View className="flex-row justify-between items-center mb-6">
              <View>
                <Text className="text-white text-xl font-bold">Join {gym.name}</Text>
                <Text className="text-slate-400 text-sm">Fill in your details</Text>
              </View>
              <TouchableOpacity onPress={() => setIsJoinModalVisible(false)}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <View className="space-y-4">
              <View>
                <Text className="text-slate-400 mb-1 text-sm">Full Name</Text>
                <TextInput 
                  value={name} 
                  onChangeText={setName} 
                  className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" 
                />
              </View>
              <View>
                <Text className="text-slate-400 mb-1 text-sm">Email Address</Text>
                <TextInput 
                  value={email} 
                  onChangeText={setEmail} 
                  className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" 
                  keyboardType="email-address"
                />
              </View>
              <View>
                <Text className="text-slate-400 mb-1 text-sm">Phone Number</Text>
                <TextInput 
                  value={phone} 
                  onChangeText={setPhone} 
                  className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" 
                  keyboardType="phone-pad"
                />
              </View>
              
              <View>
                <Text className="text-slate-400 mb-2 text-sm">Membership Plan</Text>
                <View className="flex-row space-x-3">
                  {['Monthly', 'Annual'].map((plan) => (
                    <TouchableOpacity 
                      key={plan}
                      className={`flex-1 p-3 rounded-xl border ${membershipType === plan ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-700 bg-slate-800'}`}
                      onPress={() => setMembershipType(plan)}
                    >
                      <Text className={`text-center font-bold ${membershipType === plan ? 'text-emerald-500' : 'text-slate-400'}`}>
                        {plan}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>

            <TouchableOpacity 
              className="bg-emerald-500 p-4 rounded-xl items-center mt-6 shadow-lg shadow-emerald-500/20"
              onPress={handleSubmit}
            >
              <Text className="text-white font-bold text-lg">Submit Application</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View className="h-10" />
    </ScrollView>
  );
}
