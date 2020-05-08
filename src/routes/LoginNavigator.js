import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import LoginScreen from '../Screens/login'
import SignupScreen from '../Screens/SignUp'

const loginScreens = {
    'Login': {
        screen: LoginScreen
    },
    'Sign Up': {
        screen: SignupScreen
    }
}

const LoginStack = createStackNavigator(loginScreens, {
    initialRouteParams: 'Login',
    headerMode: 'none'
})

export default createAppContainer(LoginStack)