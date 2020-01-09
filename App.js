import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutHistory from './src/Components/WorkoutHistory';

export default function App() {
  return (
    <View style={styles.container}>
      <WorkoutHistory />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 60
  },
});
