import React, { Component } from 'react';
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {


        constructor(props) {
            super(props);
            //before request is sent
            this.reqInterceptors = axios.interceptors.request.use(req => {
                return req;
            });
            //before response is displayed
            this.resInterceptors = axios.interceptors.response.use(response => {
                if (response.data.response === "loggedout") {
                    //place your reentry code
                    this.props.history.push("/login");
                }
                return response;
            }, error => {
                if (error.response.status === 500) {
                    this.props.history.push("/");
                }
            })
        }

        componentWillUnmount() {
            // console.log('will unmount', this.reqInterceptors, this.resInterceptors)
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.request.eject(this.resInterceptors);
        }
        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }
}
export default withErrorHandler;