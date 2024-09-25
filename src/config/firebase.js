import { initializeApp } from 'firebase/app';
import { getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxHvaPHunTKdE43MvfX7L33c72ovf7IQI", 
  authDomain: "sankalp-v5.firebaseapp.com",
  projectId: "sankalp-v5",
  storageBucket: "sankalp-v5.appspot.com",
  messagingSenderId: "849071102771",
  appId: Platform.select({
    ios: "1:849071102771:ios:d6ab0645f4776f0f28bc46",
    android: "1:849071102771:android:d6ab0645f4776f0f28bc46",
    web: "1:849071102771:web:bc8fba64f1e4c7f58bc46",
  }),
};


// Log for Firebase initialization
console.log("Before Firebase initialization");


// Initialize Firebase app
let app;
if (!initializeApp.apps || !initializeApp.apps.length) {
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp.apps[0];
}


// Log for Firebase initialization
console.log("After Firebase initialization");


// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);




// Set React Native persistence for Firebase Auth
console.log("Set React Native persistence for Firebase Auth");


auth.setPersistence(getReactNativePersistence(AsyncStorage))
  .then(() => {
    console.log("Auth persistence is set using AsyncStorage for React Native!");
  })
  .catch((error) => {
    console.error("Error setting auth persistence:", error);
  });

export { auth, firestore, storage };
