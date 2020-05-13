// import { getNextWorkout } from '../helpers/workoutAlgoHelpers'

const init_state = {
    workoutHistory: [],
    loading: false,
    selectedWorkout: null
}

function workoutReducer(prevState = init_state, action){
    //console.log('in reducer',action.payload)
    switch(action.type){
        case 'FETCH_WORKOUTS_BEGIN':
            return {...prevState, loading: true}
        case 'FETCH_WORKOUTS_SUCCESS':
            return {...prevState, loading: false, workoutHistory: action.payload.workouts}
        case 'UPDATE_SET_REPS':
            let updatedSelectedWorkout = {...prevState.selectedWorkout}
            let exercise = updatedSelectedWorkout.attributes.exercises.find(exercise => exercise.id === action.payload.exerciseId)
            let exerciseIndex = updatedSelectedWorkout.attributes.exercises.findIndex(exercise => exercise.id === action.payload.exerciseId)
            
            let newValue = ''
            let v  = exercise.setInfo[action.payload.exerciseSetIndex]
            if (v === ''){
                newValue = `${action.payload.reps}`
            }
            else if(v === '0'){
                newValue === ''
            }
            else{
                newValue = `${parseInt(v) - 1}`
            }
            updatedSelectedWorkout.attributes.exercises[exerciseIndex].setInfo[action.payload.exerciseSetIndex] = newValue
            return {...prevState, selectedWorkout: updatedSelectedWorkout}
        case 'SET_DISPLAYED_WORKOUT':
            const {workoutHistory} = prevState
            let displayedWorkout = workoutHistory.find(workout => workout.id === action.payload.workoutId)
            return {...prevState, selectedWorkout: displayedWorkout}
        case 'SAVE_WORKOUT':
            let updatedWorkoutHistory = [...prevState.workoutHistory]
            let workoutIndex = updatedWorkoutHistory.findIndex(workout => workout.id === action.payload.updatedWorkout.id)
            updatedWorkoutHistory[workoutIndex] = {...prevState.selectedWorkout}
            return {...prevState, workoutHistory: updatedWorkoutHistory}
        case 'DISPLAY_CREATED_WORKOUT':
            return {...prevState, workoutHistory: [action.payload.createdWorkout, ...prevState.workoutHistory], selectedWorkout: action.payload.createdWorkout}
        default:
            return prevState
    }
}

export default workoutReducer