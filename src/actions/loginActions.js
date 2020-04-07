export function changeUsername(e){
    return {
        type:'CHANGE_USERNAME',
        payload: {newUsername: e}
    }
}