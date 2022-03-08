/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 */
 
 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 import BottomTabNavigator from './BottomTabNavigator';
 
 export type RootStackParamList = {
   Root: undefined;
   NotFound: undefined;
 };
 
 export default function Navigation() {
   return (
     <NavigationContainer>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 // A root stack navigator is often used for displaying modals on top of all other content
 // Read more here: https://reactnavigation.org/docs/modal
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Root" component={BottomTabNavigator} />
     </Stack.Navigator>
   );
 }
 