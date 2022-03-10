import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


function HomeScreen() {
  return (
    <View testID='HomeScreen' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View testID='SettingsScreen' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
        <Tab.Navigator style={{flex: 1}}>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarTestID: 'HomeTab'
          }} />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{
            tabBarTestID: 'SettingsTab'
          }} />
        </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}