import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import LoginScreen from '../Screens/login'

const loginScreens = {
    'Login': {
        screen: LoginScreen
    }
}

const LoginStack = createStackNavigator(loginScreens, {
    initialRouteParams: 'Login',
    headerMode: 'none'
})

export default createAppContainer(LoginStack)