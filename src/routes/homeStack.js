import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import WorkoutHistory from '../Screens/WorkoutHistory'
import WorkoutDetails from '../Screens/WorkoutDetail';

const screens = {
    'Workouts': {
        screen: WorkoutHistory,
        navigationOptions: {
            title: 'My Workouts',
        }
    },
    'Workout Details': {
        screen: WorkoutDetails
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#15324A'
        },
        headerTintColor: '#ffffff',
    }
});

export default createAppContainer(HomeStack)