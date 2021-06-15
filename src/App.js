import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Login from './Screens/Login'
import Task from './Screens/Task'
import UserProfile from './Screens/UserProfile.js'
import LandingPage from './Screens/LandingPage.js'
import { TaskProvider, } from './store/TaskContext';
import { AuthProvider, } from './store/AuthContext';

const Stack = createStackNavigator()

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            header: () => null,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Task" component={Task} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
          </Stack.Navigator>
        </NavigationContainer>
      </TaskProvider>
    </AuthProvider>
  );
}
