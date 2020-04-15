const NGROK = '02fdfbcd.ngrok.io'

const LOGIN_API = `http://${NGROK}/api/v1/login`

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

export function createUser(username, password){
    console.log('hit it with the create button')
    return function(dispatch){
        
    }
}

export function loginUser(username, password){
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
            console.log(data)
        })
    }
}