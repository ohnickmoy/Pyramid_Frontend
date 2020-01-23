import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as WebBrowser from 'expo-web-browser'

const handlePress = async() => {
    await WebBrowser.openBrowserAsync('https://saynotobroscience.com/wp-content/uploads/2019/03/gzclp-infographic-030519.jpg')
}

const blogPost = async() => {
    await WebBrowser.openBrowserAsync('https://swoleateveryheight.blogspot.com/2014/07/the-gzcl-method-simplified_13.html')
}

export default function Info(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>About Pyramid</Text>
            <Text style={styles.bodyText}>Thanks for using Pyramid!</Text>
            <Text style={styles.bodyText}>Pyramid is a workout app that follows the GZCL linear progression model for beginner weightlifters. You can check out the infographic explaning GZCL 
                <Text onPress={handlePress} style={styles.linkText}> here</Text>
            </Text>
            <Text style={styles.bodyText}>For a more indepth look, <Text onPress={blogPost} style={styles.linkText}> read this!</Text></Text>
            <Text style={styles.bodyText}>Happy lifting!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fafafa',
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