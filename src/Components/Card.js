import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Card(props) {
    return (
        <View styles={StyleSheet.card}>
            <View style={StyleSheet.cardContent}></View>
        </View>
    )
}