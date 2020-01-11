import React from  'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const convertDate = (date) => {
    dateItems = date.split('T')
    return dateItems[0]
}

export default function WorkoutDetails({ navigation }){
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.headerText}>{convertDate(navigation.getParam('workout_date'))}</Text>
            <FlatList 
                data={navigation.getParam('exercises')}
                renderItem={({item}) => (
                    <View style={styles.exerciseDetails}>
                        <Text>{item.name}</Text>
                        <Text>{item.numSets} x {item.reps}</Text>
                    </View>
                )}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 24
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 10
    },
    exerciseDetails: {
        flexDirection: 'row',
        justifyContent: "space-between",
        fontSize: 30,
        padding: 10
    }
})