import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const HamburgerButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 5,
  },
  line: {
    width: 20,
    height: 2,
    backgroundColor: 'white',
    marginVertical: 2,
  },
});

export default HamburgerButton;
