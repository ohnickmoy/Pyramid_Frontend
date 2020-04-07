const init_state = {
    username: '',
    password: ''
}

function loginReducer(prevState = init_state, action){
    switch(action.type){
        case 'CHANGE_USERNAME':
            return {...prevState, username: action.payload.newUsername}
        case 'CHANGE_PASSWORD':
            return {...prevState, password: action.payload.newPassword}
        default:
            return prevState
    }
}

export default loginReducer