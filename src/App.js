import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Login from './Screens/Login'
import CreateTask from './Screens/CreateTask'
import UserProfile from './Screens/UserProfile.js'
import LandingPage from './Screens/LandingPage.js'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: () => null,
        cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS
      }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
