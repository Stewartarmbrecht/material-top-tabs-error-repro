/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { useTheme } from '../../appearence';
import Header from '../header/Header';

import ActivitiesScreen from './ActivitiesScreen';
import ActivityNavigator from './ActivityNavigator';

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ActivitiesStack = createNativeStackNavigator<ActivitiesParamList>();

export type ActivitiesNavigatorProps = NativeStackNavigationProp<ActivitiesParamList>;

export type ActivitiesParamList = {
  ActivitiesScreen: undefined;
  NewActivityNavigator: undefined;
  ActivityNavigator: undefined;
  GroupNavigator: undefined;
  EntryNavigator: undefined;
};
export default function ActivitiesNavigator({ navigation }: { navigation: any }) {
  const theme = useTheme();

  return (
    <ActivitiesStack.Navigator>
      <ActivitiesStack.Screen
        name="ActivitiesScreen"
        component={ActivitiesScreen}
        options={{
          headerTitle: () => <Header title="Activities" />
        }}
      />
      <ActivitiesStack.Screen
        name="ActivityNavigator"
        component={ActivityNavigator}
        options={{
          headerShown: false
        }}
      />
    </ActivitiesStack.Navigator>
  );
}
