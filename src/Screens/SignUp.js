import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import imageLogo from '../../assets/images/pyramid_app_icon.png'
import { changeUsername, changePassword, changePasswordVerify, createUser } from '../actions/loginActions'

class SignupScreen extends React.Component{
    handleSignUpPress =(navigation) => {
        console.log('Sign up button pressed')
        if(this.props.passwordVerify !== this.props.password)
            return alert('Passwords do not match')
        else if(!this.props.username || !this.props.password || !this.props.passwordVerify)
            return alert('Please complete the full form')
        else
            this.props.createUser(this.props.username, this.props.password, navigation)
    }

    render(){
        return(
                <KeyboardAwareScrollView
                    resetScrollToCoords={{x:0, y:0}}
                    contentContainerStyle={styles.container}
                    scrollEnabled={true}
                >
                    <Image source={imageLogo} style={styles.logo} />
                    <View style={styles.inputView}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Username'
                        placeholderTextColor='grey'
                        selectionColor='#15324A'
                        onChangeText={this.props.changeUsername}
                        autoCorrect={false}
                    />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            secureTextEntry 
                            style={styles.textInput}
                            placeholder='Password'
                            placeholderTextColor='grey'
                            selectionColor='#15324A'
                            onChangeText={this.props.changePassword}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            secureTextEntry 
                            style={styles.textInput}
                            placeholder='Verify Password'
                            placeholderTextColor='grey'
                            selectionColor='#15324A'
                            onChangeText={this.props.changePasswordVerify}
                            autoCorrect={false}
                        />
                    </View>
                    <TouchableOpacity 
                        style={styles.signUpBtn}
                        onPress={() => this.handleSignUpPress(this.props.navigation)}
                    >
                        <Text style={styles.signUpText}>Create your account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.loginBtn}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text>Go back to Login Screen</Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
        )
    }
}

function mapStateToProps(state){
    return {
        username: state.auth.username,
        password: state.auth.password,
        passwordVerify: state.auth.passwordVerify
    }
}

const mapDispatchToProps = {
    changeUsername,
    changePassword,
    changePasswordVerify,
    createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    logo: {
        width: "50%",
        height: "50%",
        resizeMode: 'contain',
        alignSelf: "center"
    },
    inputView: {
        width:"80%",
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        alignSelf: 'center'
    },
    textInput:{
        height:40,
        borderColor: '#15324A',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    },
    signUpBtn:{
        backgroundColor:"#15324A",
        borderRadius:4,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
        width: '72%',
        alignSelf: 'center'
      },
      signUpText: {
          color: '#FFFFFF'
      },
      loginBtn:{
        backgroundColor:"#F2BB05",
        borderRadius:4,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
        width: '72%',
        alignSelf: 'center'
      },
})