const TEST_API = 'http://localhost:3000/api/v1/users/1'

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

export function fetchWorkouts(){
    return function(dispatch){
        dispatch(fetchWorkoutsBegin())
        fetch(TEST_API)
            .then(res => res.json())
            .then(data => {
                let workouts = data.data.attributes.workouts.reverse()
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

export function saveWorkout(){
    return{
        type: 'SAVE_WORKOUT'
    }
}

export function getNextWorkout(){
    return{
        type: 'GET_NEXT_WORKOUT'
    }
}