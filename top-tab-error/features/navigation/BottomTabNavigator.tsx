/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 import * as React from 'react';

 import { Ionicons } from '@expo/vector-icons';
 import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 import ActivitiesNavigator from '../activities/ActivitiesNavigator';
 
 const BottomTab = createBottomTabNavigator<BottomTabParamList>();
 export type BottomTabNavigatorProps = BottomTabNavigationProp<BottomTabParamList>;
 
 export type BottomTabParamList = {
   Activities: undefined;
 };
 
 export default function BottomTabNavigator() {
 
   return (
     <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
       <BottomTab.Screen
         name="Activities"
         component={ActivitiesNavigator}
         options={{
           tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
           tabBarAccessibilityLabel: "Activities Tab",
         }}
       />
     </BottomTab.Navigator>
   );
 }
 
 // You can explore the built-in icon families and icons on the web at:
 // https://icons.expo.fyi/
 function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string; }) {
   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
 }
 