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
        headerTintColor: '#15334B',
    }
});

export default createAppContainer(HomeStack)