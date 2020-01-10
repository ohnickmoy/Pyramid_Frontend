import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutHistory from './src/Components/WorkoutHistory';

const TEST_API = 'http://localhost:3000/api/v1/users/1'

class App extends React.Component {

  state = {
    workoutHistory: []
  }

  componentDidMount(){
    fetch(TEST_API)
      .then(response => response.json())
      .then(data => {
        this.setState({workoutHistory: data.data.attributes.workouts})
      })
  }

  render(){
    return (
      <View style={styles.container}>
        <WorkoutHistory workoutHistory={this.state.workoutHistory}/>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 60
  },
});
