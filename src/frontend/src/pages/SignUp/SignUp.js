import React, { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { authCheckLoggedIn } from '../../store/actions/action';
import classes from './SignUp.module.css'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withErrorHandler from '../../components/ErrorHandler/withErrorHandler';

const SignUp = (props) => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
        // rememberMe: false
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const signupUser = (e) => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('username', formData.username);
        bodyFormData.append('password', formData.password);
        bodyFormData.append('email', formData.email);

        // bodyFormData.append('remember-me', formData.rememberMe);

        var url = 'http://localhost:8080/signup';

        const signup = async () => {
            console.log("Sign Up")
            axios({
                method: "post",
                url: url,
                data: formData,
                withCredentials: true
            })
                .then(function (response) {
                    console.log("success")
                    console.log(response);
                    toast.success('Login with the newly created account!!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    history.push("/login")
                    dispatch(authCheckLoggedIn());
                })
                .catch(function (error) {
                    console.log("error")
                    toast("Error encountered!!!");
                    console.log(error);
                });
            // const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/teams`);
            // const data = await response.json();
            // setRecipes(data)
        }
        signup();
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormData(prevState => {
            return { ...prevState, [name]: value }
        });
    }

    const notify = () => toast("Wow so easy !");


    return (
        <div className={`container ${classes.SignupSection}`}>
            <form className="form-signin">
                <h2 className="form-signin-heading">Sign up for RECIPIIS</h2>
                <p>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input onChange={(e) => handleInputChange(e)} value={formData.email} type="text" id="email" name="email" className="form-control" placeholder="Email" required=""
                        autoFocus="" />
                </p>
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
                <button className="btn btn-lg btn-primary btn-block" onClick={(e) => signupUser(e)}>Sign Up</button>

            </form>

           
        </div>
    );
}


export default withErrorHandler(SignUp, axios);