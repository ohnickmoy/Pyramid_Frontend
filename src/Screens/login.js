import React from 'react'
import { Image, StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import imageLogo from '../../assets/images/pyramid_app_icon.png'
import { connect } from 'react-redux'
import { changeUsername, changePassword, loginUser } from '../actions/loginActions'
import { TouchableOpacity } from 'react-native-gesture-handler'

class LoginScreen extends React.Component{
    handleLoginPress = (navigation) => {
        if(!this.props.username || !this.props.password){
            return alert('Please complete the full form')
        }
        this.props.loginUser(this.props.username, this.props.password, navigation)
    }

    goToSignUp = (navigation) => {
        navigation.navigate('Sign Up')
    }

    render(){
        const {username, password, navigation} = this.props
        return(
            <KeyboardAvoidingView 
                style={styles.container}
                behavior='padding'
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
                <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={() => this.handleLoginPress(navigation)}
                >
                    <Text>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.signUpBtn}
                    onPress={() => {this.goToSignUp(navigation)}}
                >
                    <Text style={styles.signUpText}>New? Create a new account!</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
    
}

function mapStateToProps(state){
    return{
        username: state.auth.username,
        password: state.auth.password
    }
}

const mapDispatchToProps = {
    changeUsername,
    changePassword,
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

const styles = StyleSheet.create({
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
      }
  });