/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import * as React from 'react';
 import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
 import { useTheme } from '../../appearence';
 import BackButton from '../header/BackButton';
 import Header from '../header/Header';
 
 import EntryScreen from './EntryScreen';
 
 // Each tab has its own navigation stack, you can read more about this pattern here:
 // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
 const NewEntryStack = createNativeStackNavigator<EntryParamList>();
 
 export type EntryNavigatorProps = NativeStackNavigationProp<EntryParamList>;
 
 export type EntryParamList = {
   EntryScreen: undefined;
 };
 export default function EntryNavigator() {
   const theme = useTheme();
 
   return (
     <NewEntryStack.Navigator>
       <NewEntryStack.Screen
         name="EntryScreen"
         component={EntryScreen}
         options={(props) => ({
           headerTitle: () => <Header title="Entry" />,
           headerLeft: () => <BackButton navigation={props.navigation} testId="EntryScreenBack" />
         })}
       />
     </NewEntryStack.Navigator>
   );
 }
 