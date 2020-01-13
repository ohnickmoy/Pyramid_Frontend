import React from  'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Card from '../Components/Card'

class WorkoutDetails extends React.Component{

    state = {
        workoutInfo: this.props.navigation.state.params
    }

    convertDate = (date) => {
        dateItems = date.split('T')
        return dateItems[0]
    }
    
    onSetPress = (index, reps, id) => {
        let exercise = this.state.workoutInfo.exercises.find(exercise => exercise.id === id)
        //console.log(exercise.setInfo[index])
        let newValue
        let v  = exercise.setInfo[index]
        if (v === ''){
            newValue = reps
        }
        else if(v === 0){
            newValue === ''
        }
        else{
            newValue = v - 1
        }
    }

    render(){
        let {navigation} = this.props
        //console.log(this.state)
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>{this.convertDate(navigation.getParam('workout_date'))}</Text>
                <FlatList 
                    data={navigation.getParam('exercises')}
                    renderItem={({item}) => (
                        <Card exerciseData={item} onSetPress={this.onSetPress}/>
                    )}
                    keyExtractor={(item) => item.id.toString() + 'WD'}
                    />
            </View>
        )
    }
}

export default WorkoutDetails

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