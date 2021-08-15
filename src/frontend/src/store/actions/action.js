import axios from "axios";

export const userlogin = (loggedIn) => {
    return {
        type: 'LOG_IN',
        loggedIn: loggedIn
    }
}

export const authCheckLoggedIn = () => {

    return dispatch => {

        let url = 'http://localhost:8080/user';
        const test =async ()=>{
            axios({
                method: 'get',
                url: url,
                responseType: 'stream',
                withCredentials: true
            }).then((res) => {
                if (res.data.authenticated !== undefined && res.data.authenticated === true) {
                    console.log("Hello")
                    dispatch(userlogin(true))
                } else {
                    console.log("Hello1314234")
                    dispatch(userlogin(false))
                }
                console.log(res);
            }).catch((err) => {
                console.log("Here")
                console.error(err);
                dispatch(userlogin(false))
            })
        }
        test()
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