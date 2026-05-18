import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MessageScreen({ route, navigation }: any) {
  const { trainer } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: `Hi ${trainer.name}! I'm interested in your training sessions.`, sender: 'me' },
    { id: 2, text: "Hello! I'd love to help you. What are your fitness goals?", sender: 'trainer' },
  ]);

  const sendMessage = () => {
    if (message.trim() === '') return;
    setMessages([...messages, { id: messages.length + 1, text: message, sender: 'me' }]);
    setMessage('');
    
    // Mock response after a delay
    setTimeout(() => {
      setMessages(prev => [...prev, { id: prev.length + 1, text: "Got it! I will check my schedule and get back to you.", sender: 'trainer' }]);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      className="flex-1 bg-slate-900"
    >
      {/* Header */}
      <View className="flex-row items-center px-6 pt-12 pb-4 border-b border-slate-800 bg-slate-900/90">
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-slate-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <View className="ml-4 flex-1">
          <Text className="text-white font-bold text-lg">{trainer.name}</Text>
          <View className="flex-row items-center">
            <View className="w-2 h-2 bg-emerald-500 rounded-full mr-1.5" />
            <Text className="text-emerald-500 text-xs font-medium">Online</Text>
          </View>
        </View>
        <TouchableOpacity className="bg-slate-800 p-2 rounded-full">
          <Ionicons name="call-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView className="flex-1 p-4">
        {messages.map((msg) => (
          <View 
            key={msg.id} 
            className={`mb-4 max-w-[80%] p-4 rounded-2xl ${msg.sender === 'me' ? 'bg-emerald-500 self-end rounded-br-none' : 'bg-slate-800 self-start rounded-bl-none border border-slate-700'}`}
          >
            <Text className={`text-sm ${msg.sender === 'me' ? 'text-white' : 'text-slate-200'}`}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Field */}
      <View className="p-4 border-t border-slate-800 flex-row items-center bg-slate-900">
        <TextInput
          className="flex-1 bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-emerald-500"
          placeholder="Type a message..."
          placeholderTextColor="#64748b"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity 
          className="ml-3 bg-emerald-500 p-4 rounded-xl items-center justify-center shadow-lg shadow-emerald-500/20"
          onPress={sendMessage}
        >
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
