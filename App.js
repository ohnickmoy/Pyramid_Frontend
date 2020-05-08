import React from 'react';
import Navigator from './src/routes/AppNavigator'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import workoutReducer from './src/reducers/WorkoutReducer'
//import { composeWithDevTools } from 'redux-devtools-extension'
//import LoginNavigator from './src/routes/LoginNavigator'
//import loginReducer from './src/reducers/loginReducer'

//const store = createStore(loginReducer, composeWithDevTools(applyMiddleware(thunk)))
//const store = createStore(workoutReducer, composeWithDevTools(applyMiddleware(thunk)))
const store = createStore(workoutReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
      {/* <LoginNavigator /> */}
    </Provider>
  )
}

