import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import NotificationScreen from '../screens/notifications/NotificationScreen';
import TrainerDetailsScreen from '../screens/trainers/TrainerDetailsScreen';
import ProductDetailsScreen from '../screens/products/ProductDetailsScreen';
import MessageScreen from '../screens/messages/MessageScreen';
import CartScreen from '../screens/products/CartScreen';
import CheckoutScreen from '../screens/products/CheckoutScreen';
import OrdersScreen from '../screens/profile/OrdersScreen';
import { RootState } from '../redux/store';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen name="Notifications" component={NotificationScreen} />
          <Stack.Screen name="TrainerDetails" component={TrainerDetailsScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
          <Stack.Screen name="Message" component={MessageScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="Orders" component={OrdersScreen} />
        </>
      ) : (
        <Stack.Screen name="AuthStack" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}
