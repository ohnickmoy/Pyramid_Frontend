const default_t1 = {
    tier: 'T1',
    weight: 100,
    reps: 3,
    numSets: 5,
    totalReps: 0,
    setInfo: ["","","","",""]
}

const default_t2 = {
    tier: 'T2',
    weight: 80,
    reps: 10,
    numSets: 3,
    totalReps: 0,
    setInfo: ["","",""]
}

const default_t3 = {
    tier: 'T3',
    weight: 55,
    reps: 15,
    numSets: 3,
    totalReps: 0,
    setInfo: ["","",""]
}

const default_workout = {
    exercises: [default_t1, default_t2, default_t3],
    routine_type: '',
    workout_date: ''
}

const getNextRoutineType = (lastWorkout) => {
    switch(lastWorkout.routine_type){
        case 'A1':
            return 'B1'
        case 'B1':
            return 'A2'
        case 'A2':
            return 'B2'
        case 'B2':
            return 'A1'
    }
}

const getNextDefaultWorkout = (nextWorkout, nextRoutineType) => {
    switch(nextRoutineType){
        case 'A1':
            nextWorkout = {...default_workout}
            nextWorkout.routine_type = 'A1'
            nextWorkout.exercises[0].name = 'Squat'
            nextWorkout.exercises[1].name = 'Bench Press'
            nextWorkout.exercises[2].name = 'Lat Pulldown'
            return nextWorkout
        case 'B1':
            nextWorkout = {...default_workout}
            nextWorkout.routine_type = 'B1'
            nextWorkout.exercises[0].name = 'Overhead Press'
            nextWorkout.exercises[1].name = 'Deadlift'
            nextWorkout.exercises[2].name = 'Dumbbell Row'
            return nextWorkout
        case 'A2':
            nextWorkout = {...default_workout}
            nextWorkout.routine_type = 'A2'
            nextWorkout.exercises[0].name = 'Bench Press'
            nextWorkout.exercises[1].name = 'Squat'
            nextWorkout.exercises[2].name = 'Lat Pulldown'
            return nextWorkout
        case 'B2':
            nextWorkout = {...default_workout}
            nextWorkout.routine_type = 'B2'
            nextWorkout.exercises[0].name = 'Deadlift'
            nextWorkout.exercises[1].name = 'Overhead Press'
            nextWorkout.exercises[2].name = 'Dumbbell Row'
            return nextWorkout
    }
}

const getDateTime = () => {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + 'T' + time + 'Z';
    return dateTime
}

const getRandomId = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const checkT1 = (exercise) => {

}

const doProgressionProtocol = (lastInstanceOfNextWorkout) => {
    let nextWorkout = {...lastInstanceOfNextWorkout}
    //console.log(nextWorkout)
    //map through each exercise
    nextWorkout.exercises = nextWorkout.exercises.map(exercise => {
        switch(exercise.tier){
            case 'T1':
                exercise = `I'm a T1`
                return exercise
            case 'T2':
                exercise = `I'm a T2`
                return exercise
            case 'T3':
                exercise = `I'm a T3`
                return exercise
        }
    })

    console.log('After map',nextWorkout)
}

export function getNextWorkout(workoutHistory){
    let nextWorkout;
    let lastWorkout = workoutHistory[0]
    let nextRoutineType = getNextRoutineType(lastWorkout)

    let filteredWorkoutHistory = workoutHistory.filter(workout => workout.routine_type === nextRoutineType)

    //means no instance of whatever next workout exists
    if(filteredWorkoutHistory.length === 0){
        nextWorkout = getNextDefaultWorkout(nextWorkout, nextRoutineType)
        //the below block is for testing purposes to make it work before I do posting to back end
        nextWorkout.id = (lastWorkout.id + 1)
        nextWorkout.workout_date = getDateTime()
        nextWorkout.exercises[0].id = getRandomId(1000)
        nextWorkout.exercises[1].id = getRandomId(1000)
        nextWorkout.exercises[2].id = getRandomId(1000)
    }
    else { 
        //means that instance of whatever next workout does in fact exist 
        //console.log('Testing for existence case',filteredWorkoutHistory[0])
        let lastInstanceOfNextWorkout = filteredWorkoutHistory[0]

        doProgressionProtocol(lastInstanceOfNextWorkout)

        //the below block is for testing purposes to make it work before I do posting to back end
        nextWorkout = getNextDefaultWorkout(nextWorkout, nextRoutineType)
        nextWorkout.id = (lastWorkout.id + 1)
        nextWorkout.workout_date = getDateTime()
        nextWorkout.exercises[0].id = getRandomId(1000)
        nextWorkout.exercises[1].id = getRandomId(1000)
        nextWorkout.exercises[2].id = getRandomId(1000)


    }

    // console.log('default workout', default_workout)

    //console.log('final workout object to be sent off',nextWorkout)

    return nextWorkout
    
    //get last workout
    //look at type of last workout
        //A1 -> B1, B1 -> A2, A2 -> B2, B2 -> A1
    //check instance of last type that user is transitioning into
        //if last type doesn't exist
            //use defaults
        //else
            //cycle through each of the exercises
                //check their tier
                    //if tier1
                        //do the success failure logic
                    //if tier2
                        //so on and so forth
                    //leave tier 3 for now

}