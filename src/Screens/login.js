import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Temp Login Screen</Text>
            </View>
        )
    }
    
}

function mapStateToProps(state){
    return{
        username: state.username,
        password: state.password
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        flex: 1,
        width: `100%`,
        resizeMode: 'contain',
        alignSelf: "center"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: '80%'
    }
})