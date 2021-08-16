import React from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "../NavBar/NavBar";
import classes from './Layout.module.css';
export const Layout = (props) => {


    return (
        <>
            <NavBar />
            <main className={classes.Content}>
                {props.children}
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </main>
        </ >
    );
}