
const userdata = (action) => {
    return action.userdata;
}
const userDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_DATA':
            {
                return userdata(action);
            }
        default:
            return state;
    }
}


export default userDataReducer;