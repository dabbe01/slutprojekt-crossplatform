import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Login from '../Screens/Login'
import Task from '../Screens/Task'
import UserProfile from '../Screens/UserProfile.js'
import LandingPage from '../Screens/LandingPage.js'
import CreateTask from '../Screens/CreateTask.js'
import { TaskProvider, } from '../store/TaskContext';
import { AuthProvider, } from '../store/AuthContext';

const Stack = createStackNavigator()

export default function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                header: () => null,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
                <Stack.Screen name="LandingPage" component={LandingPage} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Task" GetTask component={Task} />
                <Stack.Screen name="UserProfile" component={UserProfile} />
                <Stack.Screen name="CreateTask" component={CreateTask} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}