import  deepcopy  from 'deepcopy'

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
            nextWorkout = deepcopy(default_workout)
            nextWorkout.routine_type = 'A1'
            nextWorkout.exercises[0].name = 'Squat'
            nextWorkout.exercises[1].name = 'Bench Press'
            nextWorkout.exercises[2].name = 'Lat Pulldown'
            return nextWorkout
        case 'B1':
            nextWorkout = deepcopy(default_workout)
            nextWorkout.routine_type = 'B1'
            nextWorkout.exercises[0].name = 'Overhead Press'
            nextWorkout.exercises[1].name = 'Deadlift'
            nextWorkout.exercises[2].name = 'Dumbbell Row'
            return nextWorkout
        case 'A2':
            nextWorkout = deepcopy(default_workout)
            nextWorkout.routine_type = 'A2'
            nextWorkout.exercises[0].name = 'Bench Press'
            nextWorkout.exercises[1].name = 'Squat'
            nextWorkout.exercises[2].name = 'Lat Pulldown'
            return nextWorkout
        case 'B2':
            nextWorkout = deepcopy(default_workout)
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

const getTotalReps = (setInfo) => {
    let totalReps = setInfo.filter(num => num)
    if(totalReps.length > 1){
        totalReps = totalReps.reduce((num1, num2) => {
            return parseInt(num1) + parseInt(num2)
        })
    }
    else{
        totalReps = 0
    }
    return totalReps
}

//gives next tier 1 exercise
//does success failure logic here
const nextT1 = (exercise) => {
    switch(exercise.numSets){
        case 5: 
            if(getTotalReps(exercise.setInfo) >= 15){
                exercise.weight += 5
                exercise.setInfo = ["","","","",""]
            }
            else{
                exercise.weight += 5
                exercise.setInfo = ["","","","","",""]
                exercise.numSets = 6
                exercise.reps = 2
            }
            break;
        case 6:
            if(getTotalReps(exercise.setInfo) >= 12){
                exercise.weight += 5
                exercise.setInfo = ["","","","","",""]
            }
            else{
                exercise.weight += 5
                exercise.setInfo = ["","","","","","","","","",""]
                exercise.numSets = 10
                exercise.reps = 1
            }
            break;
        case 10:
            if(getTotalReps(exercise.setInfo) > 10){
                exercise.weight += 5
                exercise.setInfo = ["","","","","","","","","",""]
            }
            else{
                exercise.weight = Math.round((exercise.weight * 0.85)/5,0) * 5
                exercise.setInfo = ["","","","","",""]
                exercise.numSets = 5
                exercise.reps = 3
            }
            break;
    }
    return exercise
}

const nextT2 = (exercise) => {
    switch(exercise.reps){
        case 10:
            if(getTotalReps(exercise.setInfo) >= 30){
                exercise.weight += 5
            }
            else{
                exercise.weight += 5
                exercise.reps = 8
            }
            break;
        case 8:
            if(getTotalReps(exercise.setInfo) >= 24){
                exercise.weight += 5
            }
            else{
                exercise.weight += 5
                exercise.reps = 6
            }
            break;
        case 6:
            if(getTotalReps(exercise.setInfo) >= 18){
                exercise.weight += 5
            }
            else{
                exercise.weight = Math.round(((exercise.weight/0.8)*0.7)/5,0) * 5
                exercise.reps = 10
            }
            break;
    }
    exercise.setInfo = ["","",""]
    return exercise
}

const nextT3 = (exercise) => {
    exercise.setInfo = ["","",""]
    return exercise
}

const doProgressionProtocol = (nextWorkout, lastInstanceOfNextWorkoutType) => {
    //console.log('last instance',lastInstanceOfNextWorkoutType)

    //copies last instance of next workout type
    nextWorkout = deepcopy(lastInstanceOfNextWorkoutType) 
    //cycles through each exercise, returns array of next exercises for each tier
    nextWorkout.exercises = nextWorkout.exercises.map(exercise => {
        switch(exercise.tier){
            case 'T1':
                return nextT1(exercise)
            case 'T2':
                return nextT2(exercise)
            case 'T3':
                return nextT3(exercise)
        }
    })

    // nextWorkout.id = (nextWorkout.id + 1)
    // nextWorkout.workout_date = getDateTime()
    // nextWorkout.exercises[0].id = getRandomId(1000)
    // nextWorkout.exercises[1].id = getRandomId(1000)
    // nextWorkout.exercises[2].id = getRandomId(1000)

    console.log('After map',nextWorkout)
    return nextWorkout
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
        let lastInstanceOfNextWorkoutType = filteredWorkoutHistory[0]

        nextWorkout = doProgressionProtocol(nextWorkout, lastInstanceOfNextWorkoutType)

        console.log('after progression protocol method ',nextWorkout)

        //the below block is for testing purposes to make it work before I do posting to back end
        //nextWorkout = getNextDefaultWorkout(nextWorkout, nextRoutineType)
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