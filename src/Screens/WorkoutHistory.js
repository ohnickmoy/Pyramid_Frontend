import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import Card from '../Components/Card'

const TEST_API = 'http://localhost:3000/api/v1/users/1'

class WorkoutHistory extends React.Component{
    state = {
        workoutHistory: [],
        user: null
    }
    
    componentDidMount(){
        fetch(TEST_API)
        .then(response => response.json())
        .then(data => {
            this.setState({workoutHistory: data.data.attributes.workouts})
        })
    }

    goToDetails = (navigation, item) => {
        navigation.navigate('Workout Details', item)
    }

    convertDate = (date) => {
        dateItems = date.split('T')
        return dateItems[0]
    }

    render(){
        let navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.workoutHistory}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.item} activeOpacity={1} onPress={() => this.goToDetails(navigation, item)}>
                            <Text style={styles.cardText}>{this.convertDate(item.workout_date)}</Text>
                            <Text style={styles.cardText}>Workout Type: {item.routine_type}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}

export default WorkoutHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
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
