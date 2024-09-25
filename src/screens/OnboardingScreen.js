import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {
  const [name, setName] = useState('');
  const [bedtime, setBedtime] = useState('');
  const [wakeUpTime, setWakeUpTime] = useState('');
  const [morningRoutine, setMorningRoutine] = useState(false);
  const [eveningRoutine, setEveningRoutine] = useState(false);
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const handleOnboardingComplete = () => {
    // Basic validation
    if (!name || !bedtime || !wakeUpTime) {
      setMessage('Please complete all fields');
      return;
    }

    // Save preferences (e.g., to AsyncStorage, Firebase, etc.)
    // For now, just showing a success message
    setMessage('Onboarding Complete!');
    
    // Navigate to Home Screen (or another screen)
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Welcome to Sankalp Planner</Text>

      <TextInput
        label="Your Name"
        mode="outlined"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        label="Bedtime (e.g. 10:00 PM)"
        mode="outlined"
        value={bedtime}
        onChangeText={setBedtime}
        style={styles.input}
      />

      <TextInput
        label="Wake Up Time (e.g. 6:00 AM)"
        mode="outlined"
        value={wakeUpTime}
        onChangeText={setWakeUpTime}
        style={styles.input}
      />

      <Checkbox.Item
        label="I want a Morning Routine"
        status={morningRoutine ? 'checked' : 'unchecked'}
        onPress={() => setMorningRoutine(!morningRoutine)}
      />

      <Checkbox.Item
        label="I want an Evening Routine"
        status={eveningRoutine ? 'checked' : 'unchecked'}
        onPress={() => setEveningRoutine(!eveningRoutine)}
      />

      <Button mode="contained" onPress={handleOnboardingComplete} style={styles.button}>
        Complete Onboarding
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
