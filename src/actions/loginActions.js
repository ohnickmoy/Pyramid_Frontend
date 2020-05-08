const NGROK = 'c0c6e5f4.ngrok.io'

const LOGIN_API = `http://${NGROK}/api/v1/login`
const SIGNUP_API = `http://${NGROK}/api/v1/signup`

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

export function createUser(username, password){
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
            //in this portion, we received a user  and we're just logging it to the console
            //in this portion we probably have to do a redirect using a navigator
            //in this case, its the workouts screen
            console.log(data)
            if(data.errors){
                alert(data.errors[0])
            }
        })
    }
}

export function loginUser(username, password, navigation){
    console.log('hit it')
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