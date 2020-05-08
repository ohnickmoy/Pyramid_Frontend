import { combineReducers } from 'redux';
import workoutReducer from './WorkoutReducer'
import loginReducer from  './loginReducer'

const rootReducer = combineReducers({
    app: workoutReducer,
    auth: loginReducer
})

export default rootReducer;