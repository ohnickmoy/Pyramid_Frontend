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