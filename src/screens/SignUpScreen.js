import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { signUp } from '../services/authService';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = () => {
    signUp(email, password)
      .then(() => {
        setMessage('Sign up successful!');
      })
      .catch((error) => {
        setMessage(`Sign up failed: ${error.message}`);
      });
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Sign Up for Sankalp Planner</Text>
      
      <TextInput
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        label="Age"
        mode="outlined"
        value={age}
        onChangeText={setAge}
        style={styles.input}
        keyboardType="numeric"
      />

      <TextInput
        label="Sex"
        mode="outlined"
        value={sex}
        onChangeText={setSex}
        style={styles.input}
      />

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

      <Button mode="contained" onPress={handleSignUp} style={styles.button}>
        Sign Up
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
