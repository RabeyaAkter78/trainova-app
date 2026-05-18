import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';

export default function ProductDetailsScreen({ route, navigation }: any) {
  const { product } = route.params;
  const dispatch = useDispatch();
  const { totalCount } = useSelector((state: RootState) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Alert.alert('Success', 'Product added to cart!');
  };

  return (
    <ScrollView className="flex-1 bg-slate-900">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 pt-12 pb-4 absolute top-0 left-0 right-0 z-10">
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-slate-900/80 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Cart')} 
          className="bg-slate-900/80 p-2 rounded-full relative"
        >
          <Ionicons name="cart-outline" size={24} color="white" />
          {totalCount > 0 && (
            <View className="absolute -top-1 -right-1 bg-emerald-500 w-5 h-5 rounded-full items-center justify-center">
              <Text className="text-white text-xs font-bold">{totalCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <Image source={{ uri: product.image }} className="w-full h-96" resizeMode="cover" />

      {/* Product Info */}
      <View className="p-6 bg-slate-900 -mt-6 rounded-t-3xl">
        <Text className="text-slate-400 text-sm font-medium">{product.brand}</Text>
        <Text className="text-white text-3xl font-bold mt-1">{product.name}</Text>
        
        <View className="flex-row items-center mt-2">
          <Ionicons name="star" size={18} color="#fbbf24" />
          <Text className="text-white font-bold ml-1">{product.rating}</Text>
          <Text className="text-slate-400 ml-1">({product.reviews} reviews)</Text>
        </View>

        <Text className="text-emerald-500 text-3xl font-bold mt-4">${product.price}</Text>

        <Text className="text-slate-300 mt-4 text-base leading-6">{product.description}</Text>

        {/* Action Buttons */}
        <View className="flex-row space-x-3 mt-8 mb-8">
          <TouchableOpacity 
            className="bg-slate-800 p-4 rounded-xl border border-slate-700 justify-center items-center"
            onPress={() => Alert.alert('Wishlist', 'Added to wishlist!')}
          >
            <Ionicons name="heart-outline" size={24} color="#ef4444" />
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-emerald-500 flex-1 p-4 rounded-xl items-center justify-center shadow-lg shadow-emerald-500/20"
            onPress={handleAddToCart}
          >
            <Text className="text-white font-bold text-lg">Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="h-10" />
    </ScrollView>
  );
}
