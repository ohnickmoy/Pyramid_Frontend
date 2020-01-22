import React, { useState } from 'react'
import {StyleSheet, View, Text } from 'react-native'
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import moment from 'moment'
import { Circle } from 'react-native-svg'

const axesSvg = { fontSize: 14, fill: 'black' };
const verticalContentInset = { top: 30, bottom: 30 }
const xAxisHeight = 20

const strokeColors = {
    'Squat': '#DB504A',
    'Bench Press': '#00ADDD',
    'Deadlift': '#20BF55',
    'Overhead Press': '#820263'
}

const ChartPoints = ({ x, y, data, strokeColor, circleIndex, handleCirclePress}) =>
    data.map((item, index) => (
        <Circle
            key={index}
            cx={x(index)}
            cy={y(item.weight)}
            r={7.5}
            stroke={strokeColor}
            strokeWidth={index === circleIndex ? '4' : '3'}
            fill={index === circleIndex ? 'black' : 'white'}
            onPress={() => handleCirclePress(index, item.weight, item.workout_date)}
        />
    )
);

function ChartCard(props) {
    let { exerciseData } = props
    let strokeColor = strokeColors[exerciseData.type]

    const [circleIndex, setCircleIndex] = useState(null)
    const [workoutDate, setExerciseDate] = useState(null)
    const [weight, setWeight] = useState(null)

    function handleCirclePress(index, weight, date){
        setCircleIndex(index)
        setWeight(' - ' + weight + 'lb')
        setExerciseDate(moment(date).format("MMM DD, YYYY"))
    }
    return (
        <View style={styles.exerciseCard}>
            <View style={styles.chart}>
                <YAxis
                    data={exerciseData.exercises}
                    yAccessor={({ item }) => item.weight}
                    numberOfTicks={6}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={exerciseData.exercises}
                        numberOfTicks={6}
                        yAccessor={({ item }) => item.weight}
                        //xAccessor={ ({ item }) => moment(item.workout_date)}
                        contentInset={verticalContentInset}
                        svg={{ stroke: strokeColor, strokeWidth: '4' }}
                    >
                        <Grid />
                        <ChartPoints strokeColor={strokeColor} circleIndex={circleIndex} handleCirclePress={handleCirclePress}/>
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={exerciseData.exercises}
                        formatLabel={(value, index) => `${index}`}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>
            <Text style={styles.exerciseHeader}>{exerciseData.type}{weight ? weight : ''}</Text>
            <Text style={styles.exerciseBodyText}>{workoutDate ? workoutDate : `Your workout history for ${exerciseData.type}s`}</Text>
        </View>
    )
}

export default ChartCard

const styles = StyleSheet.create({
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
    exerciseBodyText: {
        fontSize: 16,
        paddingHorizontal: 15,
        marginBottom: 15
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