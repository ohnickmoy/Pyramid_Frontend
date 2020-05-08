const init_state = {
    username: '',
    password: '',
    passwordVerify: '',
    loggedIn: false,
    userId:null,
    
}

function loginReducer(prevState = init_state, action){
    switch(action.type){
        case 'CHANGE_USERNAME':
            return {...prevState, username: action.payload.newUsername}
        case 'CHANGE_PASSWORD':
            return {...prevState, password: action.payload.newPassword}
        case 'CHANGE_PASSWORD_VERIFY':
            return {...prevState, passwordVerify: action.payload.newPasswordVerify}
        case 'LOGIN_USER':
            return prevState
        default:
            return prevState
    }
}

export default loginReducer