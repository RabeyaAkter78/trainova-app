import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';

export default function AuthScreen() {
  const [activeTab, setActiveTab] = useState('login');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Mock login
    dispatch(login({ email: 'user@example.com', name: 'Alex Smith' }));
  };

  const handleSignup = () => {
    // Mock signup
    dispatch(login({ email: 'user@example.com', name: 'Alex Smith' }));
  };

  return (
    <View className="flex-1 bg-slate-900 justify-center px-6">
      <View className="items-center mb-10">
        <Text className="text-white text-5xl font-bold tracking-tight">TraiNova</Text>
        <Text className="text-slate-400 mt-3 text-lg">Your fitness journey starts here</Text>
      </View>

      {/* Tabs */}
      <View className="flex-row bg-slate-800 rounded-2xl p-1.5 mb-8 border border-slate-700">
        <TouchableOpacity 
          className={`flex-1 py-3.5 rounded-xl ${activeTab === 'login' ? 'bg-emerald-500' : ''}`}
          onPress={() => setActiveTab('login')}
        >
          <Text className={`text-center font-bold text-base ${activeTab === 'login' ? 'text-white' : 'text-slate-400'}`}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className={`flex-1 py-3.5 rounded-xl ${activeTab === 'signup' ? 'bg-emerald-500' : ''}`}
          onPress={() => setActiveTab('signup')}
        >
          <Text className={`text-center font-bold text-base ${activeTab === 'signup' ? 'text-white' : 'text-slate-400'}`}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {activeTab === 'login' ? (
        <View>
          <View className="mb-4">
            <Text className="text-slate-300 mb-2 font-medium">Email</Text>
            <TextInput 
              className="bg-slate-800 text-white p-4 rounded-2xl border border-slate-700 focus:border-emerald-500"
              placeholder="Enter your email"
              placeholderTextColor="#64748b"
            />
          </View>
          
          <View className="mb-6">
            <Text className="text-slate-300 mb-2 font-medium">Password</Text>
            <TextInput 
              className="bg-slate-800 text-white p-4 rounded-2xl border border-slate-700 focus:border-emerald-500"
              placeholder="Enter your password"
              placeholderTextColor="#64748b"
              secureTextEntry
            />
          </View>
          
          <TouchableOpacity 
            className="bg-emerald-500 p-4 rounded-2xl items-center shadow-lg shadow-emerald-500/20"
            onPress={handleLogin}
          >
            <Text className="text-white font-bold text-lg">Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="mt-4 self-center">
            <Text className="text-emerald-400 font-medium">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View className="mb-4">
            <Text className="text-slate-300 mb-2 font-medium">Full Name</Text>
            <TextInput 
              className="bg-slate-800 text-white p-4 rounded-2xl border border-slate-700 focus:border-emerald-500"
              placeholder="Enter your full name"
              placeholderTextColor="#64748b"
            />
          </View>

          <View className="mb-4">
            <Text className="text-slate-300 mb-2 font-medium">Email</Text>
            <TextInput 
              className="bg-slate-800 text-white p-4 rounded-2xl border border-slate-700 focus:border-emerald-500"
              placeholder="Enter your email"
              placeholderTextColor="#64748b"
            />
          </View>
          
          <View className="mb-6">
            <Text className="text-slate-300 mb-2 font-medium">Password</Text>
            <TextInput 
              className="bg-slate-800 text-white p-4 rounded-2xl border border-slate-700 focus:border-emerald-500"
              placeholder="Create a password"
              placeholderTextColor="#64748b"
              secureTextEntry
            />
          </View>
          
          <TouchableOpacity 
            className="bg-emerald-500 p-4 rounded-2xl items-center shadow-lg shadow-emerald-500/20"
            onPress={handleSignup}
          >
            <Text className="text-white font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
