import constants from '../variables'

const LOGIN_API = `http://${constants.NGROK}/api/v1/login`
const SIGNUP_API = `http://${constants.NGROK}/api/v1/signup`

export function changeUsername(e){
    return {
        type:'CHANGE_USERNAME',
        payload: {newUsername: e}
    }
}

export function changePassword(e){
    return {
        type: 'CHANGE_PASSWORD',
        payload: {newPassword: e}
    }
}

export function changePasswordVerify(e){
    return {
        type: 'CHANGE_PASSWORD_VERIFY',
        payload: {newPasswordVerify: e}
    }
}

export function setUser(userId){
    return {
        type: 'SET_USER',
        payload: {userId: userId}
    }
}

export function createUser(username, password, navigation){
    return function(dispatch){
        fetch(SIGNUP_API, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res=>res.json())
        .then(data => {
            dispatch(setUser(data.data.id))
            if(data.errors){
                alert(data.errors[0])
            }
        })
        .then(data => {
            navigation.navigate('App')
        })
    }
}

export function loginUser(username, password, navigation){
    return function(dispatch){
        fetch(LOGIN_API, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res=>res.json())
        .then(data => {
            dispatch(setUser(data.data.id))
        })
        .then(data => {
            navigation.navigate('App')
        })
    }
}