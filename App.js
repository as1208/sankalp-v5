console.log("Welcome to App.js - Before imports ");

import React, { useEffect } from 'react';

import { auth } from './src/config/firebase'; // assuming firebase.js is in config folder
console.log("Firebase auth imported");

import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator'; // Your navigation setup



console.log("Welcome to App.js -After the import section");

export default function App(){
  console.log("Inside  App function in App.js  ");
  
  useEffect(() => {
    if (auth) {
      console.log("Firebase Initialized");
    }
  }, []);
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}