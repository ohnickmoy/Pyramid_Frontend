import React from 'react';
import Navigator from './src/routes/AppNavigator'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
//import workoutReducer from './src/reducers/WorkoutReducer'
import rootReducer from './src/reducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
//const store = createStore(workoutReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

