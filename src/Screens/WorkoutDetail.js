import React from  'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import Card from '../Components/Card'
import { connect } from 'react-redux'
import { updateSetsReps, saveWorkout } from '../actions/workoutActions'
import { TouchableOpacity } from 'react-native-gesture-handler';

class WorkoutDetails extends React.Component{

    convertDate = (date) => {
        dateItems = date.split('T')
        return dateItems[0]
    }

    onSetPress = (exerciseSetIndex, reps, exerciseId) => {
        this.props.updateSetsReps(exerciseSetIndex, reps, exerciseId)
    }

    saveWorkout = (navigation) => {
        this.props.saveWorkout()
        navigation.navigate('Workouts')
    }

    render(){
        const {selectedWorkout, navigation} = this.props
        return (
            <View style={styles.container}>
            <Text style={styles.headerText}>{this.convertDate(selectedWorkout.workout_date)}</Text>
                <FlatList 
                    data={selectedWorkout.exercises}
                    renderItem={({item}) => (
                        <Card exerciseData={item} onSetPress={this.onSetPress}/>
                    )}
                    keyExtractor={(item) => item.id.toString() + 'WD'}/>
                <TouchableOpacity style={styles.saveButton} onPress={() => this.saveWorkout(navigation)}>
                    <Text style={styles.saveText}>Save your Progress</Text>
                </TouchableOpacity>
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
    updateSetsReps,
    saveWorkout
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
    saveButton: {
        alignItems: 'center',
        backgroundColor: '#F2BB05',
        padding: 10
    },
    saveText: {
        fontSize: 20,
        color: '#15324A',
        fontWeight: 'bold'
    }
})