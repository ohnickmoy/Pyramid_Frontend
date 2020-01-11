import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutHistory from './src/Screens/WorkoutHistory';
import Navigator from './src/routes/homeStack'

const TEST_API = 'http://localhost:3000/api/v1/users/1'

export default function App() {
  return (
    <Navigator />
  )
}

