import React from  'react';
import { StyleSheet, View, Text, FlatList, StatusBar } from 'react-native';
import Card from '../Components/Card'
import { connect } from 'react-redux'
import { updateSetsReps, saveWorkout, fetchSaveWorkout } from '../actions/workoutActions'
import { TouchableOpacity } from 'react-native-gesture-handler';

class WorkoutDetails extends React.Component{

    convertDate = (date) => {
        dateItems = date.split('T')
        return dateItems[0]
    }

    onSetPress = (exerciseSetIndex, reps, exerciseId) => {
        //console.log(exerciseSetIndex, reps, exerciseId)
        this.props.updateSetsReps(exerciseSetIndex, reps, exerciseId)
    }

    saveWorkout = (navigation, selectedWorkout) => {
        this.props.fetchSaveWorkout(navigation, selectedWorkout)
    }

    render(){
        const {selectedWorkout, navigation} = this.props
        //console.log(selectedWorkout)
        return (
            <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#15324A" />
            <Text style={styles.headerText}>{this.convertDate(selectedWorkout.attributes.workout_date)}</Text>
                <FlatList 
                    data={selectedWorkout.attributes.exercises}
                    renderItem={({item}) => (
                        <Card exerciseData={item} onSetPress={this.onSetPress}/>
                    )}
                    keyExtractor={(item) => item.id.toString() + 'WD'}/>
                <TouchableOpacity style={styles.saveButton} onPress={() => this.saveWorkout(navigation, selectedWorkout.attributes)}>
                    <Text style={styles.saveText}>Save your Progress</Text>
                </TouchableOpacity>
            </View>  
        )
    }
}

function mapStateToProps(state){
    return {
        selectedWorkout: state.app.selectedWorkout
    }
}

const mapDispatchToProps = {
    updateSetsReps,
    saveWorkout,
    fetchSaveWorkout
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetails)

const styles = StyleSheet.create({
    container:{
        //margin: 10
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
        padding: 10,
        marginHorizontal: 10
    },
    saveText: {
        fontSize: 20,
        color: '#15324A',
        fontWeight: 'bold'
    }
})