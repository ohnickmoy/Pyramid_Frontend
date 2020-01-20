import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function exerciseCharts(){
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.bodyText}>Oink</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 10,
        marginBottom: 12
    },
    bodyText: {
        fontSize: 18,
        marginBottom: 14,
        lineHeight: 20
    },
    linkText:{
        color: '#47A0A4'
    }
})