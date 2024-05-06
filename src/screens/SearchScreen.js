import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function SearchScreen() {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Enter City" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
