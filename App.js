import React from 'react';
import LoginNavigator from './src/routes/LoginNavigator'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import loginReducer from './src/reducers/loginReducer'
import Navigator from './src/routes/AppNavigator'
import workoutReducer from './src/reducers/WorkoutReducer'
import RootReducer from './src/reducers/rootReducer'
import CentralNavigator from './src/routes/CentralNavigator'

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))
//const store = createStore(loginReducer, composeWithDevTools(applyMiddleware(thunk)))
//const store = createStore(workoutReducer, composeWithDevTools(applyMiddleware(thunk)))
//const store = createStore(workoutReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <CentralNavigator />
      {/* <Navigator /> */}
      {/* <LoginNavigator /> */}
    </Provider>
  )
}

