import React, { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { authCheckLoggedIn } from '../../store/actions/action';
import classes from './Login.module.css'
import withErrorHandler from '../../components/ErrorHandler/withErrorHandler';
import { toast } from 'react-toastify';
const Login = (props) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
        // rememberMe: false
    });
    const dispatch = useDispatch();

    const loginUser = (e) => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('username', formData.username);
        bodyFormData.append('password', formData.password);
        // bodyFormData.append('remember-me', formData.rememberMe);

        var url = `${process.env.REACT_ROOT_API_URL}/login`;

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
                    if (response !== 'error') {
                        toast.success('Login Successful', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                    dispatch(authCheckLoggedIn());
                })
                .catch(function (error) {
                    console.log("error")
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                });
            // const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/teams`);
            // const data = await response.json();
            // setRecipes(data)
        }
        login();
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormData(prevState => {
            return { ...prevState, [name]: value }
        });
    }

    return (
        <div className={`container ${classes.LoginSection}`}>
            <form className="form-signin">
                <h2 className="form-signin-heading">Please login to RECIPIIS</h2>
                <p>
                    <label htmlFor="username" className="sr-only">Username</label>
                    <input onChange={(e) => handleInputChange(e)} value={formData.username} type="text" id="username" name="username" className="form-control" placeholder="Username" required=""
                        autoFocus="" />
                </p>
                <p>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input onChange={(e) => handleInputChange(e)} value={formData.password} type="password" id="password" name="password" className="form-control" placeholder="Password"
                        required="" />
                </p>
                {/* <p>
                    Remember me?
                    <input onChange={(e) => handleInputChange(e)} value={formData.rememberMe} type="checkbox" id="remember-me" name="rememberMe" />
                </p> */}
                <button className="btn btn-lg btn-primary btn-block" onClick={(e) => loginUser(e)}>Login</button>
            </form>
        </div>
    );
}

export default withErrorHandler(Login, axios);