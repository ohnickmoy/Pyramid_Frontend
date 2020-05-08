import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AppNavigator from '../routes/AppNavigator'
import LoginNavigator from '../routes/LoginNavigator'
import { connect } from 'react-redux'

const centralNavigator = createAppContainer(
    createSwitchNavigator({
        App: AppNavigator,
        Auth: LoginNavigator
    },
    {
        initialRouteName: 'Auth'
    })
)

export default centralNavigator
// function Navigator(props){
//     if(props.loggedIn === true){
//         console.log('logged in is true, so I made it to login navigator')
//         return <AppNavigator />
//     }
//     else{
//         console.log('logged in false so I made it to login navigator')
//         return <LoginNavigator />
//     }
// }

// function mapStateToProps(state){
//     return {
//         loggedIn: state.loginReducer.loggedIn
//     }
// }

// export default connect(mapStateToProps, null)(Navigator)