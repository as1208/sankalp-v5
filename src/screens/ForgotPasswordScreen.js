import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { resetPassword } from '../services/authService';  // Import reset password service

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = () => {
    resetPassword(email)
      .then(() => {
        setMessage('Password reset email sent!');
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
      });
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Reset Your Password</Text>
      
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={handleForgotPassword} style={styles.button}>
        Send Password Reset Email
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
