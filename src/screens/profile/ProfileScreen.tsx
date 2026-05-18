import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  
  // State for Modals
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);

  // State for Form Inputs (Mock)
  const [name, setName] = useState('Alex Smith');
  const [email, setEmail] = useState('alex.smith@example.com');
  const [phone, setPhone] = useState('+1 234 567 890');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      Alert.alert('Success', 'Profile photo updated successfully!');
    }
  };

  return (
    <ScrollView className="flex-1 bg-slate-900 pt-12 px-4">
      {/* Profile Header */}
      <View className="items-center mb-6">
        <View className="relative">
          <Image 
            source={{ uri: image }} 
            className="w-24 h-24 rounded-full border-2 border-emerald-500" 
          />
          <TouchableOpacity 
            className="absolute bottom-0 right-0 bg-emerald-500 p-1.5 rounded-full"
            onPress={pickImage}
          >
            <Ionicons name="camera" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <Text className="text-white text-2xl font-bold mt-4">{name}</Text>
        <Text className="text-slate-400 text-sm">Premium Member</Text>
      </View>

      {/* Fitness Goals */}
      <View className="bg-slate-800 p-4 rounded-2xl mb-6 border border-slate-700">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-white text-lg font-bold">Fitness Goals</Text>
          <TouchableOpacity>
            <Text className="text-emerald-500 text-sm font-medium">Edit</Text>
          </TouchableOpacity>
        </View>
        <View className="mb-2">
          <View className="flex-row justify-between mb-1">
            <Text className="text-slate-400 text-sm">Weight Goal</Text>
            <Text className="text-white font-medium text-sm">75 kg / 80 kg</Text>
          </View>
          <View className="w-full bg-slate-700 h-2 rounded-full">
            <View className="bg-emerald-500 h-2 rounded-full w-[90%]" />
          </View>
        </View>
      </View>

      {/* Statistics */}
      <View className="flex-row justify-between mb-6">
        <View className="bg-slate-800 p-4 rounded-2xl w-[48%] border border-slate-700">
          <Ionicons name="flame" size={24} color="#ef4444" />
          <Text className="text-white text-xl font-bold mt-2">12,450</Text>
          <Text className="text-slate-400 text-xs mt-0.5">Total Calories</Text>
        </View>
        <View className="bg-slate-800 p-4 rounded-2xl w-[48%] border border-slate-700">
          <Ionicons name="time" size={24} color="#3b82f6" />
          <Text className="text-white text-xl font-bold mt-2">24h 15m</Text>
          <Text className="text-slate-400 text-xs mt-0.5">Workout Time</Text>
        </View>
      </View>

      {/* Settings / Actions */}
      <View className="bg-slate-800 rounded-2xl border border-slate-700 mb-8">
        <TouchableOpacity 
          className="flex-row justify-between items-center p-4 border-b border-slate-700"
          onPress={() => setIsEditModalVisible(true)}
        >
          <View className="flex-row items-center">
            <Ionicons name="person-outline" size={20} color="#64748b" />
            <Text className="text-white ml-3 font-medium">Account Settings</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#64748b" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="flex-row justify-between items-center p-4 border-b border-slate-700"
          onPress={() => setIsPasswordModalVisible(true)}
        >
          <View className="flex-row items-center">
            <Ionicons name="lock-closed-outline" size={20} color="#64748b" />
            <Text className="text-white ml-3 font-medium">Change Password</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#64748b" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row justify-between items-center p-4"
          onPress={() => dispatch(logout())}
        >
          <View className="flex-row items-center">
            <Ionicons name="log-out-outline" size={20} color="#ef4444" />
            <Text className="text-red-500 ml-3 font-medium">Logout</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Edit Profile Modal */}
      <Modal visible={isEditModalVisible} animationType="slide" transparent>
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-slate-900 p-6 rounded-t-3xl border-t border-slate-800">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-white text-xl font-bold">Account Settings</Text>
              <TouchableOpacity onPress={() => setIsEditModalVisible(false)}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <View className="items-center mb-6">
              <Image source={{ uri: image }} className="w-20 h-20 rounded-full" />
              <TouchableOpacity className="mt-2" onPress={pickImage}>
                <Text className="text-emerald-500 font-medium">Change Photo</Text>
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
                />
              </View>
              <View>
                <Text className="text-slate-400 mb-1 text-sm">Phone Number</Text>
                <TextInput 
                  value={phone} 
                  onChangeText={setPhone} 
                  className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" 
                />
              </View>
            </View>

            <TouchableOpacity 
              className="bg-emerald-500 p-4 rounded-xl items-center mt-6 shadow-lg shadow-emerald-500/20"
              onPress={() => setIsEditModalVisible(false)}
            >
              <Text className="text-white font-bold text-lg">Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Change Password Modal */}
      <Modal visible={isPasswordModalVisible} animationType="slide" transparent>
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-slate-900 p-6 rounded-t-3xl border-t border-slate-800">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-white text-xl font-bold">Change Password</Text>
              <TouchableOpacity onPress={() => setIsPasswordModalVisible(false)}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <View className="space-y-4">
              <View>
                <Text className="text-slate-400 mb-1 text-sm">Current Password</Text>
                <TextInput 
                  secureTextEntry 
                  className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" 
                  placeholder="Enter current password"
                  placeholderTextColor="#64748b"
                />
              </View>
              <View>
                <Text className="text-slate-400 mb-1 text-sm">New Password</Text>
                <TextInput 
                  secureTextEntry 
                  className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" 
                  placeholder="Enter new password"
                  placeholderTextColor="#64748b"
                />
              </View>
              <View>
                <Text className="text-slate-400 mb-1 text-sm">Confirm New Password</Text>
                <TextInput 
                  secureTextEntry 
                  className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500" 
                  placeholder="Confirm new password"
                  placeholderTextColor="#64748b"
                />
              </View>
            </View>

            <TouchableOpacity 
              className="bg-emerald-500 p-4 rounded-xl items-center mt-6 shadow-lg shadow-emerald-500/20"
              onPress={() => setIsPasswordModalVisible(false)}
            >
              <Text className="text-white font-bold text-lg">Update Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View className="h-10" />
    </ScrollView>
  );
}
