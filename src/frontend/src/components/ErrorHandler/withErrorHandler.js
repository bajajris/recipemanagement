import React, { Component } from 'react';
import { toast } from 'react-toastify';
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
                return response;
            }, error => {
               if(error.response.status===400){
                    toast.error('Invalid Login!!!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
                return "error";
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