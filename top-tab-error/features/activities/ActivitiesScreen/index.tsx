import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View } from '../../../components';
import { ActivitiesNavigatorProps } from '../ActivitiesNavigator';

export default function ActivitiesScreen() {
    const activitiesNavigator = useNavigation<ActivitiesNavigatorProps>();
    return <View testID='ActivitiesScreen'><Text onPress={() => {
    activitiesNavigator.navigate("ActivityNavigator");
   }}>Activities Screen</Text></View>
}