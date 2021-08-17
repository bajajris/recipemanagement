import axios from "axios";

export const userlogin = (loggedIn) => {
    return {
        type: 'LOG_IN',
        loggedIn: loggedIn
    }
}


export const getUserData = (userdata) => {
    return {
        type: 'GET_USER_DATA',
        userdata: userdata,
    }
}

export const authCheckLoggedIn = () => {

    return dispatch => {

        let url = `${process.env.REACT_ROOT_API_URL}/user`;
        const loggedInCheck =async ()=>{
            axios({
                method: 'get',
                url: url,
                responseType: 'stream',
                withCredentials: true
            }).then((res) => {
                if (res.data.authenticated !== undefined && res.data.authenticated === true) {
                    console.log("Hello")
                    dispatch(getUserData(res.data))
                    dispatch(userlogin(true))
                } else {
                    console.log("Hello1314234")
                    dispatch(getUserData(res.data))
                    dispatch(userlogin( false))
                }
                console.log(res);
            }).catch((err) => {
                console.log("Here")
                console.error(err);
                dispatch(getUserData({authenticated: false}))
                dispatch(userlogin(false))
            })
        }
        loggedInCheck()
        // const token = localStorage.getItem('token');
        // if (!token) {
        //     dispatch(logout());
        // } else {
        //     const expirationDate = new Date(localStorage.getItem('expirationDate'));

        //     if (expirationDate <= new Date()) {
        //         dispatch(logout());
        //     } else {
        //         const userId = localStorage.getItem('userId');
        //         dispatch(authSuccess(token, userId));
        //         dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        //         //getSeconds was not working
        //         //used getTime to get milli seconds and divide by 1000

        //     }
        // };
    }
}