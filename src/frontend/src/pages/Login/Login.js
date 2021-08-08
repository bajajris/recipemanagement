import React, { useEffect } from 'react';
import axios from 'axios'

export const Login = () => {

    useEffect(() => {
        var bodyFormData = new FormData();
        bodyFormData.append('username', 'linda');
        bodyFormData.append('password', 'password');
        bodyFormData.append('remember-me', true);

        var url = 'http://localhost:8080/login';

        const login = async () => {
            console.log("Here")
            axios({
                method: "post",
                url: url,
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true
            })
                .then(function (response) {
                    console.log("success")

                    console.log(response);
                })
                .catch(function (error) {
                    console.log("error")
                    console.log(error);
                });
            // const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/teams`);
            // const data = await response.json();
            // setRecipes(data)
        }
        login();
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        let url = 'http://localhost:8080/user';

        console.log("Hello");
        axios({
            method: 'get',
            url: url,
            responseType: 'stream',
            withCredentials: true
          }).then((res)=>{
              console.log(res);
          }).catch((err)=>{
              console.error(err);
          })
    }

    return (
        <div className="container">
            <form className="form-signin">
                <h2 className="form-signin-heading">Please login to RECIPIIS</h2>
                <p>
                    <label htmlFor="username" className="sr-only">Username</label>
                    <input type="text" id="username" name="username" className="form-control" placeholder="Username" required=""
                        autoFocus="" />
                </p>
                <p>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="password" name="password" className="form-control" placeholder="Password"
                        required="" />
                </p>
                <p>
                    Remember me?
                    <input type="checkbox" id="remember-me" name="remember-me" />
                </p>
                <button className="btn btn-lg btn-primary btn-block" onClick={(e) => handleClick(e)}>Login</button>
            </form>
        </div>
    );
}