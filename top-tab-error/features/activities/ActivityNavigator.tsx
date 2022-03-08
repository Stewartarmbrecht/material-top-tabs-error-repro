/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import * as React from 'react';
 import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import BackButton from '../header/BackButton';
import Header from '../header/Header';
import ActivityDetailsTopTabNavigator from './ActivityDetailsTopTabNavigator';

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ActivityStack = createNativeStackNavigator<ActivityParamList>();

export type ActivityNavigatorProps = NativeStackNavigationProp<ActivityParamList>;

export type ActivityParamList = {
  ActivityDetailsNavigator: undefined;
};
export default function ActivityNavigator() {

  return (
    <ActivityStack.Navigator>
      <ActivityStack.Screen
        name="ActivityDetailsNavigator"
        component={ActivityDetailsTopTabNavigator}
        options={(props) => ({
            headerTitle: () => <Header title="Activity" />,
            headerLeft: () => <BackButton navigation={props.navigation} testId="ActivityDetailsNavigatorBack" />
        })}
      />
    </ActivityStack.Navigator>
  );
}
