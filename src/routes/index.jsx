import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import App from "../containers/App/App.jsx";
import LogInPage from "../pages/LogInPage/LogInPage.jsx"

export default () =>{
    return(
        <Switch>
            <Route path="/login" component={LogInPage} />
            <AuthenticatedRoute path="/"  component={App} />
        </Switch>
    );
};

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      localStorage.getItem('jwt') ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
