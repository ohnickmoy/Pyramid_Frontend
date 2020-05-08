import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, StatusBar } from 'react-native'
import { fetchWorkouts, setDisplayedWorkout, getNextWorkout, createNextWorkout } from '../actions/workoutActions'
import { connect } from 'react-redux'

class WorkoutHistory extends React.Component{
    
    componentDidMount(){
        console.log(this.props.id, 'id')
        this.props.fetchWorkouts(this.props.id)
    }

    goToDetails = (navigation, id) => {
        this.props.setDisplayedWorkout(id)
        navigation.navigate('Workout Details')
    }

    convertDate = (date) => {
        let convertedDate = new Date(date).toLocaleDateString()
        let convertedTime = new Date(date).toLocaleTimeString()
        return convertedDate + ' - ' + convertedTime
    }

    getNextWorkout = (workoutHistory, navigation) => {
        this.props.createNextWorkout(workoutHistory, navigation)
    }

    render(){
        const {loading, workoutHistory, navigation} = this.props
        if(loading){
            return <Text style={styles.headerText}>Loading...</Text>
        }
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#15324A" />
                <TouchableOpacity style={styles.saveButton} onPress={() => this.getNextWorkout(workoutHistory, navigation)}>
                    <Text style={styles.saveText}>Start your next workout</Text>
                </TouchableOpacity>
                <FlatList 
                    data={workoutHistory}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.item} activeOpacity={1} onPress={() => this.goToDetails(navigation, item.id)}>
                            <View style={styles.topRow}>
                                <Text style={styles.cardText}>{this.convertDate(item.workout_date)}</Text>
                                <Text style={styles.cardText}>Workout Type: {item.routine_type}</Text>
                            </View>
                            <View style={styles.bottomRow}>
                                {item.exercises.map((exercise, index) => {
                                    return(
                                        <View style={styles.exerciseRow} key={exercise + index}>
                                            <Text style={styles.setRepText}>{exercise.name}</Text>
                                            <View style={styles.setRepData}>
                                                <Text style={styles.setRepText}>{exercise.tier}: </Text>
                                                <Text style={styles.setRepText}>{exercise.numSets} sets x {exercise.reps} reps - {exercise.weight}lb</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
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
        workoutHistory: state.app.workoutHistory,
        loading: state.app.loading,
        id: state.auth.userId
    }
}

const mapDispatchToProps = {
    fetchWorkouts,
    setDisplayedWorkout,
    getNextWorkout,
    createNextWorkout
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutHistory)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginHorizontal: 10
        //backgroundColor: 'black'
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'        
    },
    bottomRow: {
        flexDirection: 'column',
        marginTop: 14,
    },
    exerciseRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 16,
        marginBottom: 5
    },
    setRepData: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
        // alignSelf:'flex-end'
    },
    item: {
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10, 
        borderRadius: 1.5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        flexDirection: 'column',
    },
    cardText: {
        fontSize: 18
    },
    setRepText: {
        fontSize: 16
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
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 3
    },
    saveText: {
        fontSize: 20,
        color: '#15324A',
        fontWeight: 'bold'
    }
  });
