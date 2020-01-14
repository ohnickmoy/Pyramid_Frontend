import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function Card(props) {
    let { exerciseData } = props
    return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <Text style={styles.topRowText}>{exerciseData.name}</Text>
                <Text style={styles.topRowText}>{exerciseData.numSets} x {exerciseData.reps} - {exerciseData.weight} lb</Text>
            </View>
            <View style={styles.bottomRow}>
                {exerciseData.setInfo.map((set, index) => {
                    if (set === '') {
                        return (
                            <TouchableOpacity activeOpacity={1} onPress={() => props.onSetPress(index, exerciseData.reps, exerciseData.id)} style={[styles.circle, styles.gray]} key={set + index}/>
                        )
                    }
                    return (
                        <TouchableOpacity activeOpacity={1} onPress={() => props.onSetPress(index, exerciseData.reps, exerciseData.id)} style={styles.circle} key={set + index}>
                            <Text style={styles.circleText}>{set}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'column',
        marginBottom: 10,
        padding: 5,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'        
    },
    topRowText:{
        fontSize: 19
    },
    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14,
        marginBottom:6,
        flexWrap: 'wrap',
    },
    circle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#62D4DF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 10,
        marginTop: 10
    },
    circleText: {
        fontSize: 18,
        margin: 'auto'
    },
    gray: {
        backgroundColor: '#777777'
    }
})