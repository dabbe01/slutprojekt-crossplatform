import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Login from './Screens/Login'
import Task from './Screens/Task'
import UserProfile from './Screens/UserProfile.js'
import LandingPage from './Screens/LandingPage.js'
import CreateTask from './Screens/CreateTask.js'
import { TaskProvider, } from './store/TaskContext';
import { AuthProvider, } from './store/AuthContext';
import Nav from './navigators'

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Nav></Nav>
      </TaskProvider>
    </AuthProvider>
  );
}
