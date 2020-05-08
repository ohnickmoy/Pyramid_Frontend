import { combineReducers } from 'redux';
import workoutReducer from './WorkoutReducer'
import loginReducer from  './loginReducer'

const rootReducer = combineReducers({
    workoutReducer,
    loginReducer
})

export default rootReducer;