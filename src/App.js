import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenB from './Screens/ScreenB'
import CreateTask from './Screens/CreateTask'
import UserProfile from './Screens/UserProfile.js'
import LandingPage from './Screens/LandingPage.js'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ header: () => null }}>
        <Stack.Screen name="Screen_B" component={ScreenB} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
       <Stack.Screen name="UserProfile" component={UserProfile}   />
       <Stack.Screen name="LandingPage" component={LandingPage}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
