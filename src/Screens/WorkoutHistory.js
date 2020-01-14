import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { fetchWorkouts, setDisplayedWorkout } from '../actions/workoutActions'
import { connect } from 'react-redux'


class WorkoutHistory extends React.Component{
    
    componentDidMount(){
        this.props.fetchWorkouts()
    }

    goToDetails = (navigation, id) => {
        this.props.setDisplayedWorkout(id)
        navigation.navigate('Workout Details')
    }

    convertDate = (date) => {
        dateItems = date.split('T')
        return dateItems[0]
    }

    onSetPress = (index, reps, exerciseId) => {
        // let newWorkoutHistory = [...this.state.workoutHistory]
        // let workoutIndex = newWorkoutHistory.findIndex(workout => workout.id === workoutId)

        // let exercise = newWorkoutHistory[workoutIndex].exercises.find(exercise => exercise.id === exerciseId)
        // let exerciseIndex = newWorkoutHistory[workoutIndex].exercises.findIndex(exercise => exercise.id === exerciseId)

        // let newValue = 0
        // let v  = exercise.setInfo[index]
        // if (v === ''){
        //     newValue = reps
        // }
        // else if(v === 0){
        //     newValue === ''
        // }
        // else{
        //     newWorkoutHistory[workoutIndex].exercises[exerciseIndex].setInfo[index] = newValue = parseInt(v) - 1
        // }
    }

    render(){
        const {loading, workoutHistory, navigation} = this.props
        if(loading){
            return <Text>Loading...</Text>
        }
        return (
            <View style={styles.container}>
                <FlatList 
                    data={workoutHistory}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.item} activeOpacity={1} onPress={() => this.goToDetails(navigation, item.id)}>
                            <Text style={styles.cardText}>{this.convertDate(item.workout_date)}</Text>
                            <Text style={styles.cardText}>Workout Type: {item.routine_type}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString() + "WH"}
                />
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        workoutHistory: state.workoutHistory,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    fetchWorkouts,
    setDisplayedWorkout
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutHistory)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        marginHorizontal: 10
    },
    item: {
        marginTop: 10,
        padding: 10, 
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardText: {
        fontSize: 16
    }
  });
