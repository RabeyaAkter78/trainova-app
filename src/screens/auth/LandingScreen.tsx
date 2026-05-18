import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mockTrainers } from '../../mock/trainers';
import { mockProducts } from '../../mock/products';

const { width } = Dimensions.get('window');

const heroSlides = [
  {
    id: 1,
    title: 'Transform Your Body',
    subtitle: 'Connect with elite trainers and reach your goals.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Premium Wellness',
    subtitle: 'Discover top gyms and wellness programs near you.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: 'Fuel Your Performance',
    subtitle: 'Shop the best fitness products and supplements.',
    image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
];

const mockGyms = [
  {
    id: '1',
    name: 'Iron Paradise',
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '2',
    name: 'Zen Yoga Studio',
    location: 'Westside',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah K.',
    role: 'Member',
    text: 'TraiNova completely changed how I approach fitness. The trainers are top-notch!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 2,
    name: 'David M.',
    role: 'Athlete',
    text: 'The best platform for finding quality gyms and products. Highly recommended.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
];

export default function LandingScreen({ navigation }: any) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (currentSlide + 1) % heroSlides.length;
      setCurrentSlide(nextSlide);
      scrollViewRef.current?.scrollTo({ x: nextSlide * width, animated: true });
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <ScrollView className="flex-1 bg-slate-900">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 pt-12 pb-4 bg-slate-900/90 border-b border-slate-800">
        <Text className="text-white text-2xl font-bold tracking-tight">TraiNova</Text>
        <TouchableOpacity 
          className="bg-emerald-500 px-5 py-2.5 rounded-full"
          onPress={() => navigation.navigate('Auth')}
        >
          <Text className="text-white font-bold text-sm">Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Carousel */}
      <View className="relative h-[400px]">
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const offset = e.nativeEvent.contentOffset.x;
            setCurrentSlide(Math.round(offset / width));
          }}
        >
          {heroSlides.map((slide) => (
            <View key={slide.id} style={{ width }}>
              <Image source={{ uri: slide.image }} className="w-full h-full" resizeMode="cover" />
              <View className="absolute inset-0 bg-black/60 justify-center px-8">
                <Text className="text-white text-4xl font-extrabold mb-2">{slide.title}</Text>
                <Text className="text-slate-200 text-lg">{slide.subtitle}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        {/* Carousel Indicators */}
        <View className="absolute bottom-6 left-0 right-0 flex-row justify-center space-x-2">
          {heroSlides.map((_, index) => (
            <View
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${index === currentSlide ? 'bg-emerald-500' : 'bg-slate-500'}`}
            />
          ))}
        </View>
      </View>

      {/* Popular Trainers */}
      <View className="px-6 py-8">
        <View className="flex-row justify-between items-center mb-5">
          <Text className="text-white text-xl font-bold">Popular Trainers</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
            <Text className="text-emerald-500 font-medium">View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mockTrainers.map((trainer) => (
            <TouchableOpacity 
              key={trainer.id} 
              className="bg-slate-800 p-4 rounded-2xl mr-4 w-64 border border-slate-700"
              onPress={() => navigation.navigate('Auth')}
            >
              <Image source={{ uri: trainer.image }} className="w-full h-36 rounded-xl mb-3" />
              <Text className="text-white font-bold text-base">{trainer.name}</Text>
              <Text className="text-slate-400 text-sm mb-2">{trainer.specialty}</Text>
              <View className="flex-row justify-between items-center">
                <Text className="text-emerald-500 font-bold">${trainer.price}/h</Text>
                <View className="flex-row items-center bg-slate-700/50 px-2.5 py-1 rounded-full">
                  <Ionicons name="star" size={14} color="#fbbf24" />
                  <Text className="text-slate-300 text-xs font-bold ml-1">{trainer.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Popular Gyms */}
      <View className="px-6 py-4">
        <View className="flex-row justify-between items-center mb-5">
          <Text className="text-white text-xl font-bold">Popular Gyms</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
            <Text className="text-emerald-500 font-medium">View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mockGyms.map((gym) => (
            <TouchableOpacity 
              key={gym.id} 
              className="bg-slate-800 p-4 rounded-2xl mr-4 w-64 border border-slate-700"
              onPress={() => navigation.navigate('Auth')}
            >
              <Image source={{ uri: gym.image }} className="w-full h-36 rounded-xl mb-3" />
              <Text className="text-white font-bold text-base">{gym.name}</Text>
              <View className="flex-row items-center mt-1">
                <Ionicons name="location" size={14} color="#94a3b8" />
                <Text className="text-slate-400 text-sm ml-1">{gym.location}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Popular Products */}
      <View className="px-6 py-8">
        <View className="flex-row justify-between items-center mb-5">
          <Text className="text-white text-xl font-bold">Popular Products</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
            <Text className="text-emerald-500 font-medium">View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mockProducts.map((product) => (
            <TouchableOpacity 
              key={product.id} 
              className="bg-slate-800 p-4 rounded-2xl mr-4 w-52 border border-slate-700"
              onPress={() => navigation.navigate('Auth')}
            >
              <Image source={{ uri: product.image }} className="w-full h-28 rounded-xl mb-3" />
              <Text className="text-white font-bold" numberOfLines={1}>{product.name}</Text>
              <Text className="text-slate-400 text-sm mb-2">{product.brand}</Text>
              <View className="flex-row justify-between items-center">
                <Text className="text-emerald-500 font-bold">${product.price}</Text>
                <TouchableOpacity className="bg-slate-700 p-1.5 rounded-full">
                  <Ionicons name="cart-outline" size={16} color="#10b981" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Testimonials */}
      <View className="px-6 py-8 mb-8 bg-slate-800/50 border-t border-b border-slate-800">
        <Text className="text-white text-xl font-bold mb-5 text-center">What Our Members Say</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {testimonials.map((testimonial) => (
            <View key={testimonial.id} className="bg-slate-800 p-6 rounded-2xl mr-4 w-72 border border-slate-700">
              <Text className="text-slate-300 text-sm italic mb-4">"{testimonial.text}"</Text>
              <View className="flex-row items-center">
                <Image source={{ uri: testimonial.avatar }} className="w-10 h-10 rounded-full" />
                <View className="ml-3">
                  <Text className="text-white font-bold text-sm">{testimonial.name}</Text>
                  <Text className="text-slate-500 text-xs">{testimonial.role}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
