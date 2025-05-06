import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert("Merhaba!", "Tanışmak güzel!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tanışma Uygulamasına Hoş Geldin</Text>
      <Button title="Benimle Tanış" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center'
  },
});