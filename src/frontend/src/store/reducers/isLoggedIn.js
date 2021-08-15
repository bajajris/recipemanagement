

const loggedIn = (action) => {
    return action.loggedIn;
}


const isLoggedInReducer = (state = false, action) => {
    switch (action.type) {
        case 'LOG_IN':
            {
                console.log("sdfsdfsdfsdfs")
                return loggedIn(action)
            }
        default:
            return state;
    }
}


export default isLoggedInReducer;