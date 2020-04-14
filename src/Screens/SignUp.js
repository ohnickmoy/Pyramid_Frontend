import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import imageLogo from '../../assets/images/pyramid_app_icon.png'
import { changeUsername, changePassword, changePasswordVerify } from '../actions/loginActions'

class SignupScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <KeyboardAwareScrollView>
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
                    >
                    <Text style={styles.signUpText}>Create your account</Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        username: state.username,
        password: state.password,
        passwordVerify: state.passwordVerify
    }
}

const mapDispatchToProps = {
    changeUsername,
    changePassword,
    changePasswordVerify
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
      }
})