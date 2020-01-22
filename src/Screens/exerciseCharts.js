import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import { connect } from 'react-redux'
//import moment from 'moment'
import { Circle } from 'react-native-svg'
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

    getSquats = () => {
        let squats = []; 
        //console.log(this.props.workoutHistory)
        squats = this.props.workoutHistory.reduce((accumulator, workout) => {
            workout.exercises.forEach(exercise => {
                if(exercise.name === 'Squat'){
                    exercise.workout_date = workout.workout_date
                    accumulator.push(exercise)
                }
            })
            return accumulator
        }, [])
        return squats.reverse()
    }

    render() {

        // const axesSvg = { fontSize: 14, fill: 'black' };
        // const verticalContentInset = { top: 30, bottom: 30 }
        // const xAxisHeight = 20

        //const squatData = this.getSquats()
        //this.sortExercisesByType()
        const sortedExercises = this.sortExercisesByType()
        console.log(sortedExercises)
        // const ChartPoints = ({ x, y, data }) => 
        //     data.map((item, index) => (
        //         <Circle 
        //             key={index}
        //             cx={x(index)}
        //             cy={y(item.weight)} 
        //             r={6}
        //             stroke={'rgb(134, 65, 244)'} 
        //             fill={'white'}
        //         />
        //     )
        // );

        // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
        // All react-native-svg-charts components support full flexbox and therefore all
        // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
        // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
        // and then displace the other axis with just as many pixels. Simple but manual.

        return (
            <View style={styles.container}>
                <FlatList
                    data={sortedExercises}
                    renderItem={({item}) => (
                        <ChartCard exerciseData={item} />
                    )}
                    keyExtractor={(item, index) => index.toString() + 'Chart'}
                />
                {/* <View style={styles.exerciseCard}>
                    <View style={styles.chart}>
                        <YAxis
                            data={squatData}
                            yAccessor={({item}) => item.weight}
                            numberOfTicks={6}
                            style={{ marginBottom: xAxisHeight }}
                            contentInset={verticalContentInset}
                            svg={axesSvg}
                        />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <LineChart
                                style={{ flex: 1 }}
                                data={squatData}
                                numberOfTicks={6}
                                yAccessor={({item}) => item.weight}
                                //xAccessor={ ({ item }) => moment(item.workout_date)}
                                contentInset={verticalContentInset}
                                svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth:'3' }}
                            >
                                <Grid/>
                                <ChartPoints />
                            </LineChart>
                            <XAxis
                                style={{ marginHorizontal: -10, height: xAxisHeight }}
                                data={squatData}
                                formatLabel={(value, index) => `${index}`}
                                contentInset={{ left: 10, right: 10 }}
                                svg={axesSvg}
                            />
                        </View>
                    </View>
                    <Text style={styles.exerciseHeader}>Squat</Text>
                </View> */}
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
        marginHorizontal: 5
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 10,
        marginBottom: 12
    },
    exerciseHeader: {
        fontSize: 18,
        paddingHorizontal: 15,
        marginBottom: 5
    },
    chart: {
        height:250, 
        paddingHorizontal: 10, 
        flexDirection: 'row',
    },
    exerciseCard: {
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginBottom: 10,
        marginHorizontal: 5
    }
})