import { getNextWorkout } from '../helpers/workoutAlgoHelpers'

const NGROK = '148cfa58.ngrok.io'

const USER_API = `http://${NGROK}/api/v1/users/`
const WORKOUT_API = `http://${NGROK}/api/v1/workouts/`

export function fetchWorkoutsBegin(){
    return {
        type: 'FETCH_WORKOUTS_BEGIN'
    }
}

export function setWorkouts(workouts){
    return {
        type: 'FETCH_WORKOUTS_SUCCESS',
        payload: {'workouts':workouts}
    }
}

export function fetchWorkouts(id){
    return function(dispatch){
        dispatch(fetchWorkoutsBegin())
        fetch(`${USER_API}${id}/workouts`)
            .then(res => res.json())
            .then(data => {
                //let workouts = data.data.attributes.workouts.reverse()
                let workouts = data.data.reverse()
                console.log(workouts)
                dispatch(setWorkouts(workouts))
            })
    }
}

export function setDisplayedWorkout(id){
    return {
        type: 'SET_DISPLAYED_WORKOUT',
        payload: {'workoutId': id}

    }
}

export function updateSetsReps(exerciseSetIndex, reps, exerciseId){
    return{
        type: 'UPDATE_SET_REPS',
        payload: {exerciseSetIndex: exerciseSetIndex, reps: reps, exerciseId: exerciseId}
    }
}

export function saveWorkout(updatedWorkout){
    return{
        type: 'SAVE_WORKOUT',
        payload: {updatedWorkout: updatedWorkout}
    }
}

export function displayCreatedWorkout(createdWorkout){
    return{
        type: 'DISPLAY_CREATED_WORKOUT',
        payload:{createdWorkout: createdWorkout}
    }
}

export function createNextWorkout(workoutHistory, navigation){
    let nextWorkout = getNextWorkout([...workoutHistory])
    return function(dispatch){
        fetch(USER_API + '/nextworkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({nextWorkout})
        })
        .then(res => res.json())
        .then(data => {
            let createdWorkout = data.data.attributes
            dispatch(displayCreatedWorkout(createdWorkout))
        })
        .then(data => {
            navigation.navigate('Workout Details')
        })

    }
}

export function fetchSaveWorkout(navigation, selectedWorkout){
    console.log(`${WORKOUT_API}${selectedWorkout.id}/saveworkout`)
    console.log(selectedWorkout)
    return function(dispatch){
        fetch(WORKOUT_API + `${selectedWorkout.id}/saveworkout`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({selectedWorkout})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let updatedWorkout = data.data.attributes
            console.log(updatedWorkout)
            dispatch(saveWorkout(updatedWorkout))
        })
        .then(data => {
            navigation.navigate('Workouts')
        })
    }
}