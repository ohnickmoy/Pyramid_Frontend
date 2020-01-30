import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import ChartCard from '../Components/ChartCard'
import { FlatList } from 'react-native-gesture-handler'

class ExerciseCharts extends React.Component{

    sortExercisesByType = () => {
        let sortedExercisesByType = [
            {
                type:'Squat',
                exercises:null
            },
            {
                type:'Bench Press',
                exercises:null
            },
            {
                type:'Deadlift',
                exercises:null
            },
            {
                type:'Overhead Press',
                exercises:null
            },
        ]

        sortedExercisesByType.forEach(exercise => {
            exercise.exercises = this.getExercisebyType(exercise.type)
        })

        return sortedExercisesByType
    }

    getExercisebyType = (type) => {
        let exercises = []; 
        exercises = this.props.workoutHistory.reduce((accumulator, workout) => {
            workout.exercises.forEach(exercise => {
                if(exercise.name === type){
                    exercise.workout_date = workout.workout_date
                    accumulator.push(exercise)
                }
            })
            return accumulator
        }, [])
        return exercises.reverse()
    }

    render() {
        const sortedExercises = this.sortExercisesByType()
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#15324A" />
                <FlatList
                    data={sortedExercises}
                    renderItem={({item}) => (
                        <ChartCard exerciseData={item} />
                    )}
                    keyExtractor={(item, index) => index.toString() + 'Chart'}
                />
            </View>
        )
    }

}

function mapStateToProps(state){
    return {
        workoutHistory: state.workoutHistory
    }
}

export default connect(mapStateToProps)(ExerciseCharts)

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        //marginHorizontal: 5
    },
})