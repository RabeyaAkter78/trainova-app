import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function SignupScreen() {
  return (
    <View className="flex-1 bg-slate-900 justify-center px-6">
      <View className="items-center mb-10">
        <Text className="text-white text-5xl font-bold tracking-tight">Trainova</Text>
        <Text className="text-slate-400 mt-3 text-lg">Join the ecosystem</Text>
      </View>
      
      <View className="space-y-5">
        <View>
          <Text className="text-slate-300 mb-2 font-medium">Full Name</Text>
          <TextInput 
            className="bg-slate-800 text-white p-4 rounded-2xl border border-slate-700 focus:border-emerald-500"
            placeholder="Enter your full name"
            placeholderTextColor="#64748b"
          />
        </View>

        <View className="mt-4">
          <Text className="text-slate-300 mb-2 font-medium">Email</Text>
          <TextInput 
            className="bg-slate-800 text-white p-4 rounded-2xl border border-slate-700 focus:border-emerald-500"
            placeholder="Enter your email"
            placeholderTextColor="#64748b"
          />
        </View>
        
        <View className="mt-4">
          <Text className="text-slate-300 mb-2 font-medium">Password</Text>
          <TextInput 
            className="bg-slate-800 text-white p-4 rounded-2xl border border-slate-700 focus:border-emerald-500"
            placeholder="Create a password"
            placeholderTextColor="#64748b"
            secureTextEntry
          />
        </View>
        
        <TouchableOpacity className="bg-emerald-500 p-4 rounded-2xl items-center mt-6 shadow-lg shadow-emerald-500/20">
          <Text className="text-white font-bold text-lg">Sign Up</Text>
        </TouchableOpacity>
        
        <View className="flex-row justify-center mt-6">
          <Text className="text-slate-400">Already have an account? </Text>
          <TouchableOpacity>
            <Text className="text-emerald-400 font-medium">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
