import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AppNavigator from '../routes/AppNavigator'
import LoginNavigator from '../routes/LoginNavigator'

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