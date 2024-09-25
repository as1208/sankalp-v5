import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { login } from '../services/authService'; // Import login service
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    login(email, password)
      .then(() => {
        setMessage('Login successful!');
        navigation.navigate('Onboarding'); // Navigate to onboarding screen after successful login
      })
      .catch((error) => {
        setMessage(`Login failed: ${error.message}`);
      });
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Welcome to Sankalp Planner!</Text>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      <Button mode="text" onPress={() => navigation.navigate('ForgotPassword')} style={styles.button}>
        Forgot Password?
      </Button>

      {/* New User Sign Up Link */}
      <Button mode="text" onPress={() => navigation.navigate('SignUp')} style={styles.button}>
        New User? Sign Up!
      </Button>

      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
  },
});
