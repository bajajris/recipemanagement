import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import { Layout } from "./components/Layout/Layout";
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Recipes } from './pages/Recipes/Recipes';
import RecipeForm from './pages/RecipeForm/RecipeForm';
import { useDispatch, useSelector } from 'react-redux';
import { authCheckLoggedIn } from './store/actions/action';
import { About } from './pages/About/About';
import { SignUp } from './pages/SignUp/SignUp';
const App = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    dispatch(authCheckLoggedIn())
  }, [dispatch]);

  let routes = '';
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path='/add' exact component={RecipeForm} />
        <Route path='/about' exact component={About} />
        <Route path='/' exact component={Recipes} />
        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/add' exact render={props =>
          isLoggedIn ? (
            <RecipeForm />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
        } />
        <Route path='/' exact component={Recipes} />
        <Route path='/about' exact component={About} />
        <Redirect to='/' />
      </Switch>
    );
  }


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
