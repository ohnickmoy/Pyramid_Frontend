import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

const TEST_API = 'http://localhost:3000/api/v1/users/1'



function WorkoutHistory(){
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        fetch(TEST_API)
        .then(response => response.json())
        .then(data => setWorkouts(data.data.attributes.workouts))
    }, [])
    return (
        <View>
            <Text style={styles.headerText}>Workouts</Text>
            <FlatList 
                data={workouts}
                renderItem={({item}) => (
                    <Text style={styles.item}>{item.routine_type}</Text>
                )}
            />
        </View>
    )

}

export default WorkoutHistory

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    item: {
        marginTop: 10,
        padding: 30, 
        fontSize: 14,
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    }
  });
