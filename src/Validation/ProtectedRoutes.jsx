import React from 'react'
import { Route, Redirect } from  'react-router-dom';
import Auth from "./AuthClass";
export const ProtectedRoute = ({component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={
                (props) => {
                    console.log("Above the if " + Auth.isAuthenticated());
                    if (Auth.isAuthenticated()) {
                        console.log("If" + Auth.isAuthenticated());
                        return <Component {...rest}/>;
                    } else {
                        console.log("Else" + Auth.isAuthenticated());
                        return (<Redirect to={
                            {
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }
                        }/>);
                    }
                }
            }
        />
    );
};