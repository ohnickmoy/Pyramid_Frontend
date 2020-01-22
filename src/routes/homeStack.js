import { Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import WorkoutHistory from '../Screens/WorkoutHistory'
import WorkoutDetails from '../Screens/WorkoutDetail';
import InfoScreen from '../Screens/Info'
import ExerciseCharts from '../Screens/exerciseCharts'


const activeColor = "#15324A";
const inactiveColor = "#b8bece";

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

const chartScreens = {
    'Progress': {
        screen: ExerciseCharts
    }
}

const infoScreens = {
    'About Pyramid': {
        screen: InfoScreen
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#15324A'
        },
        headerTintColor: '#ffffff',
    }, 
    // headerMode: 'float'
});

const InfoStack = createStackNavigator(infoScreens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#15324A'
        },
        headerTintColor: '#ffffff',
    }
})

const ChartStack = createStackNavigator(chartScreens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#15324A'
        },
        headerTintColor: '#ffffff',
    }, 
})

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;

    const routeName = navigation.state.routes[navigation.state.index].routeName;

    if (routeName == "Workout Details") {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
        tabBarLabel: 'Workout',
        tabBarIcon: ({focused}) => (
            <Image 
                source={require('../../assets/images/Pyramid_centered.png')}
                fadeDuration={0}
                style= {{width: 25, height: 25, tintColor: focused ? activeColor : inactiveColor}}
            />
        )
    }
}

InfoStack.navigationOptions ={
    tabBarLabel: 'About',
    tabBarIcon: ({ focused }) => (
        <Entypo
          name="link"
          size={25}
          color={focused ? activeColor : inactiveColor}
        />
      )
}

ChartStack.navigationOptions ={
    tabBarLabel: 'Charts',
    tabBarIcon: ({ focused }) => (
        <Entypo
          name="line-graph"
          size={25}
          color={focused ? activeColor : inactiveColor}
        />
      )
}

const TabNavigator = createBottomTabNavigator(
    {
        HomeStack,
        ChartStack,
        InfoStack
    },
    {
        resetOnBlur: true,
        tabBarOptions: {
            activeTintColor: activeColor,
            inactiveTintColor: inactiveColor,
            labelStyle: {
                fontSize: 16,
            },
        }
    }
)

export default createAppContainer(TabNavigator)