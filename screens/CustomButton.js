// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default CustomButton;
