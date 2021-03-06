import React from 'react';
import {Route, Switch} from "react-router";
import {SignIn, Home, SignUp, Reset, ProductEdit, ProductList} from "./templates";
import Auth from './Auth';

const Router = () => {
    return(
        <Switch>
            <Route exact path="/signup" component={SignUp} />
            {/* swich と exact はセット */}
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signin/reset" component={Reset} />
            {/* <Route exact path="/login" component={Login} /> */}
            {/* (/)? は /があってもなくてもいい */}
            <Auth>
               <Route exact path={"(/)?"} component={ProductList} />
               <Route path={"/product/edit(/:id)?"} component={ProductEdit} />
            </Auth>
        </Switch>
    )
}

export default Router;