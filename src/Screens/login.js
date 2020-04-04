import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../Components/Button'
import FormTextInput from '../Components/FormTextInput'
import imageLogo from '../../assets/images/pyramid_app_icon.png'
import { connect } from 'react-redux'

class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={imageLogo} style={styles.logo} />
                <View style={styles.form}>
                    
                </View>
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
        width: `50%`,
        resizeMode: 'contain',
        alignSelf: "center"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: '80%'
    }
})