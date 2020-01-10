import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

const TEST_API = 'http://localhost:3000/api/v1/users/1'

class WorkoutHistory extends React.Component{

    convertDate = (date) => {
        dateItems = date.split('T')
        return dateItems[0]
    }



    render(){
        return (
            <View>
                <Text style={styles.headerText}>Workouts</Text>
                <FlatList 
                    data={this.props.workoutHistory}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.item}>
                            <Text>{this.convertDate(item.workout_date)}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}

export default WorkoutHistory

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    item: {
        marginTop: 10,
        padding: 10, 
        fontSize: 14,
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    }
  });
