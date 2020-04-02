import { combineReducers } from 'redux';
import workoutReducer from './src/reducers/WorkoutReducer'
import loginReducer from  './src/reducers/loginReducer'

const rootReducer = combineReducers({
    workoutReducer,
    loginReducer
})

export default rootReducer;