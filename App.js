import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './src/reducers/rootReducer'
import CentralNavigator from './src/routes/CentralNavigator'

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default function App() {
  return (
    <Provider store={store}>
      <CentralNavigator />
    </Provider>
  )
}

