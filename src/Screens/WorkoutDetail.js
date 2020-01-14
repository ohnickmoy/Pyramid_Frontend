import React from  'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Card from '../Components/Card'
import { connect } from 'react-redux'
import { updateSetsReps } from '../actions/workoutActions'

class WorkoutDetails extends React.Component{

    convertDate = (date) => {
        dateItems = date.split('T')
        return dateItems[0]
    }

    onSetPress = (exerciseSetIndex, reps, exerciseId) => {
        this.props.updateSetsReps(exerciseSetIndex, reps, exerciseId)
    }

    render(){
        const {selectedWorkout} = this.props
        return (
            <View style={styles.container}>
            <Text style={styles.headerText}>{this.convertDate(selectedWorkout.workout_date)}</Text>
                <FlatList 
                    data={selectedWorkout.exercises}
                    renderItem={({item}) => (
                        <Card workoutId={selectedWorkout.id} exerciseData={item} onSetPress={this.onSetPress}/>
                    )}
                    keyExtractor={(item) => item.id.toString() + 'WD'}/>
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        selectedWorkout: state.selectedWorkout
    }
}

const mapDispatchToProps = {
    updateSetsReps
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetails)

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 10
    },
})