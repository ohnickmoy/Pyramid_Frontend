import React from 'react';
import Navigator from './src/routes/homeStack'
import { createStore, applyMiddleware } from 'redux'
//import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import workoutReducer from './src/reducers/WorkoutReducer'

//const store = createStore(workoutReducer, composeWithDevTools(applyMiddleware(thunk)))
const store = createStore(workoutReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

