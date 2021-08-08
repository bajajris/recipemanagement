import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Layout} from "./components/Layout/Layout";
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Recipes } from './pages/Recipes/Recipes';
const App = () => {
    let routes = (
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={Recipes} />
        <Redirect to='/' />
      </Switch>
    );
    // if (this.props.isAuthenticated) {
    //   routes = (
    //     <Switch>
    //       {/* No /auth route 
    //         does not go to checkout page ise user not signed in clicked sign up to order
    //         No /auth route no redirection to checkout as that code never gets executed 
    //       */}
    //       <Route path='/checkout' component={Checkout} />
    //       <Route path='/orders' exact component={Orders} />
    //       <Route path='/logout' exact component={Logout} />
    //       <Route path='/auth' exact component={Auth} />
    //       <Route path='/' exact component={BurgerBuilder} />
    //       <Redirect to='/' />
    //     </Switch>);
    // }
    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }

export default App;
