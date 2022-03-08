import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ActivitySettingsScreen from './ActivitySettingsScreen';
import ActivityEntriesScreen from './ActivityEntriesScreen';
import { View } from '../../components';

const ActivityDetails = createMaterialTopTabNavigator<ActivityDetailsTabParamList>();
export type ActivityDetailsTabParamList = {
  ActivityEntriesScreen: undefined;
  ActivitySettingsScreen: undefined;
};

export default function ActivityDetailsTopTabNavigator() {

  return (
    <ActivityDetails.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#024B90',
        tabBarShowLabel: false,
        tabBarShowIcon: true,
      }}
      tabBarPosition='top'
      >
      <ActivityDetails.Screen
        name='ActivitySettingsScreen'
        component={ActivitySettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          //tabBarIcon: ({ color }) => <TabBarIcon name='settings' color={color} testID='ActivitySettingsTab' />,
        }}
      />
      <ActivityDetails.Screen
        name='ActivityEntriesScreen'
        component={ActivityEntriesScreen}
        options={{
          tabBarLabel: 'Entries',
          tabBarTestID: 'ActivityEntriesTab',
          //tabBarIcon: ({ color }) => <TabBarIcon name='list' color={color} testID='ActivityEntriesTab' />,
        }}
      /> 
    </ActivityDetails.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string; testID?: string }) {
  const iconProps = {...props, testID: undefined};
  return <View testID={props.testID}><Ionicons size={20} {...iconProps} /></View>;
}
